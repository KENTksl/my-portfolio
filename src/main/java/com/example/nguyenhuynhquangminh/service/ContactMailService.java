package com.example.nguyenhuynhquangminh.service;

import jakarta.mail.internet.MimeMessage;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ConcurrentHashMap;

@Service
@ConditionalOnProperty(name = "contact.mail.enabled", havingValue = "true")
@ConditionalOnBean(JavaMailSender.class)
public class ContactMailService {
    private final JavaMailSender mailSender;
    private final String receiverEmail;
    private final String fromEmail;
    private final String subjectPrefix;
    private final Duration minInterval;
    private final Map<String, Instant> lastSentByKey = new ConcurrentHashMap<>();

    public ContactMailService(
            JavaMailSender mailSender,
            @Value("${contact.receiver.email:}") String receiverEmail,
            @Value("${spring.mail.username:}") String fromEmail,
            @Value("${contact.subject.prefix:[Contact]}") String subjectPrefix,
            @Value("${contact.min-interval-seconds:30}") long minIntervalSeconds
    ) {
        this.mailSender = mailSender;
        this.receiverEmail = receiverEmail == null ? "" : receiverEmail.trim();
        this.fromEmail = fromEmail == null ? "" : fromEmail.trim();
        this.subjectPrefix = subjectPrefix == null ? "[Contact]" : subjectPrefix.trim();
        this.minInterval = Duration.ofSeconds(Math.max(0, minIntervalSeconds));
    }

    public String send(String rateLimitKey, String fallbackReceiverEmail, String name, String email, String message) {
        applyRateLimit(rateLimitKey);

        String receiver = !receiverEmail.isBlank() ? receiverEmail : (fallbackReceiverEmail == null ? "" : fallbackReceiverEmail.trim());
        if (receiver.isBlank()) {
            throw new IllegalStateException("Missing receiver email");
        }

        String safeName = sanitizeHeaderValue(name);
        String safeEmail = sanitizeHeaderValue(email);

        String subject = (subjectPrefix.isBlank() ? "[Contact]" : subjectPrefix) + " " + safeName + " <" + safeEmail + ">";
        String body = buildBody(safeName, safeEmail, Objects.toString(message, ""));

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, false, StandardCharsets.UTF_8.name());
            helper.setTo(sanitizeHeaderValue(receiver));

            String from = !fromEmail.isBlank() ? fromEmail : receiver;
            helper.setFrom(sanitizeHeaderValue(from));
            if (!safeEmail.isBlank()) {
                helper.setReplyTo(safeEmail);
            }
            helper.setSubject(sanitizeHeaderValue(subject));
            helper.setText(body, false);

            mailSender.send(mimeMessage);
        } catch (MessagingException ex) {
            throw new IllegalStateException("Failed to build email message", ex);
        }
        return receiver;
    }

    private void applyRateLimit(String key) {
        if (minInterval.isZero()) {
            return;
        }
        if (key == null || key.isBlank()) {
            return;
        }
        Instant now = Instant.now();
        Instant last = lastSentByKey.put(key, now);
        if (last == null) {
            return;
        }
        Duration elapsed = Duration.between(last, now);
        if (elapsed.compareTo(minInterval) < 0) {
            lastSentByKey.put(key, last);
            throw new IllegalStateException("Rate limited");
        }
    }

    private static String sanitizeHeaderValue(String value) {
        if (value == null) return "";
        return value.replace("\r", "").replace("\n", "").trim();
    }

    private static String buildBody(String name, String email, String message) {
        String safeMessage = message == null ? "" : message.trim();
        return "New contact message\n\n"
                + "Name: " + Objects.toString(name, "").trim() + "\n"
                + "Email: " + Objects.toString(email, "").trim() + "\n\n"
                + "Message:\n"
                + safeMessage
                + "\n";
    }
}
