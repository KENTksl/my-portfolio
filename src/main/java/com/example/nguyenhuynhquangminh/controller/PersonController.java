package com.example.nguyenhuynhquangminh.controller;

import com.example.nguyenhuynhquangminh.model.Person;
import com.example.nguyenhuynhquangminh.repository.PersonRepository;
import com.example.nguyenhuynhquangminh.service.ContactMailService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
public class PersonController {

    @Autowired
    private ObjectProvider<PersonRepository> personRepositoryProvider;

    @Autowired
    private ObjectProvider<ContactMailService> contactMailServiceProvider;

    @Value("${upload.path}")
    private String uploadPath;

    private PersonRepository getRepository() {
        return personRepositoryProvider.getIfAvailable();
    }

    private Person getProfile() {
        PersonRepository repository = getRepository();
        if (repository == null) {
            return new Person(
                    1L,
                    "Nguyễn Huỳnh Quang Minh",
                    "quangminh211204@gmail.com",
                    "2280601945",
                    "TP. Hồ Chí Minh, Việt Nam",
                    "Chế độ không dùng database đang bật.",
                    "https://via.placeholder.com/600"
            );
        }
        List<Person> persons = repository.findAll();
        return persons.stream()
                .min(Comparator.comparing(Person::getId, Comparator.nullsLast(Long::compareTo)))
                .orElse(null);
    }

    @GetMapping("/")
    public String showIndex(Model model) {
        model.addAttribute("profile", getProfile());
        return "index";
    }

    @GetMapping("/resume")
    public String showResume(Model model) {
        model.addAttribute("profile", getProfile());
        return "resume";
    }

    @GetMapping("/projects")
    public String showProjects(Model model) {
        model.addAttribute("profile", getProfile());
        return "projects";
    }

    @GetMapping("/contact")
    public String showContact(Model model) {
        model.addAttribute("profile", getProfile());
        return "contact";
    }

    @PostMapping("/contact")
    public String submitContact(
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "email", required = false) String email,
            @RequestParam(value = "message", required = false) String message,
            @RequestParam(value = "website", required = false) String website,
            HttpServletRequest request,
            RedirectAttributes redirectAttributes
    ) {
        if (website != null && !website.isBlank()) {
            redirectAttributes.addFlashAttribute("contactError", "Form bị auto-fill vào trường ẩn (website). Hãy tắt auto-fill/password manager và gửi lại.");
            return "redirect:/contact";
        }

        String n = name == null ? "" : name.trim();
        String e = email == null ? "" : email.trim();
        String m = message == null ? "" : message.trim();

        redirectAttributes.addFlashAttribute("contactName", n);
        redirectAttributes.addFlashAttribute("contactEmail", e);
        redirectAttributes.addFlashAttribute("contactMessage", m);

        String error = validateContact(n, e, m);
        if (error != null) {
            redirectAttributes.addFlashAttribute("contactError", error);
            return "redirect:/contact";
        }

        Person profile = getProfile();
        String fallbackReceiver = profile == null ? "" : profile.getEmail();
        String rateLimitKey = request.getRemoteAddr();

        try {
            ContactMailService mailService = contactMailServiceProvider.getIfAvailable();
            if (mailService == null) {
                redirectAttributes.addFlashAttribute("contactError", "Chưa bật/cấu hình gửi mail. Hãy đặt CONTACT_MAIL_ENABLED=true và cấu hình spring.mail.* (SMTP).");
                return "redirect:/contact";
            }
            String receiver = mailService.send(rateLimitKey, fallbackReceiver, n, e, m);
            redirectAttributes.addFlashAttribute("contactSuccess", "Đã gửi tin nhắn tới: " + receiver);
            redirectAttributes.addFlashAttribute("contactName", "");
            redirectAttributes.addFlashAttribute("contactEmail", "");
            redirectAttributes.addFlashAttribute("contactMessage", "");
            return "redirect:/contact";
        } catch (Exception ex) {
            redirectAttributes.addFlashAttribute("contactError", "Không gửi được email. Hãy kiểm tra cấu hình SMTP (CONTACT_MAIL_ENABLED và spring.mail.*).");
            return "redirect:/contact";
        }
    }

    @GetMapping("/person/{id}")
    public String showDetail(@PathVariable Long id, Model model) {
        PersonRepository repository = getRepository();
        if (repository == null) {
            return "redirect:/";
        }
        Optional<Person> person = repository.findById(id);
        if (person.isPresent()) {
            model.addAttribute("person", person.get());
            return "detail";
        }
        return "redirect:/";
    }

    @PostMapping("/person/update")
    public String updatePerson(@ModelAttribute Person person, 
                               @RequestParam("imageFile") MultipartFile imageFile) throws IOException {
        PersonRepository repository = getRepository();
        if (repository == null) {
            return "redirect:/";
        }

        Optional<Person> existingPerson = repository.findById(person.getId());
        
        if (existingPerson.isPresent()) {
            Person p = existingPerson.get();
            p.setName(person.getName());
            p.setEmail(person.getEmail());
            p.setPhone(person.getPhone());
            p.setAddress(person.getAddress());
            p.setDescription(person.getDescription());

            // Xử lý upload ảnh nếu có
            if (!imageFile.isEmpty()) {
                String fileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();
                Path uploadDir = Paths.get(uploadPath).toAbsolutePath().normalize();
                Files.createDirectories(uploadDir);
                Path path = uploadDir.resolve(fileName);
                Files.write(path, imageFile.getBytes());
                p.setImageUrl("/uploads/" + fileName);
            } else if (person.getImageUrl() != null && !person.getImageUrl().isEmpty()) {
                // Nếu không upload file nhưng có nhập URL
                p.setImageUrl(person.getImageUrl());
            }

            repository.save(p);
        }
        
        return "redirect:/person/" + person.getId();
    }

    private String validateContact(String name, String email, String message) {
        if (name == null || name.isBlank()) return "Vui lòng nhập tên.";
        if (email == null || email.isBlank()) return "Vui lòng nhập email.";
        if (!email.matches("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$")) return "Email không hợp lệ.";
        if (message == null || message.isBlank()) return "Vui lòng nhập nội dung.";
        if (name.length() > 120) return "Tên quá dài.";
        if (email.length() > 200) return "Email quá dài.";
        if (message.length() > 4000) return "Nội dung quá dài.";
        return null;
    }
}
