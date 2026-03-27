package com.example.nguyenhuynhquangminh;

import com.example.nguyenhuynhquangminh.model.Person;
import com.example.nguyenhuynhquangminh.repository.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class NguyenhuynhquangminhApplication {

	public static void main(String[] args) {
		SpringApplication.run(NguyenhuynhquangminhApplication.class, args);
	}

	@Bean
	@ConditionalOnProperty(name = "app.db.enabled", havingValue = "true", matchIfMissing = true)
	CommandLineRunner initDatabase(PersonRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				Person person1 = new Person(
						null,
						"Nguyễn Huỳnh Quang Minh",
						"minh.nhq@example.com",
						"2280601945",
						"TP. Hồ Chí Minh, Việt Nam",
						"Tôi là sinh viên Hutech.",
						"https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/542753880_2016896915721612_2903859603296776384_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Er7w5zaCVLgQ7kNvwEqH-5a&_nc_oc=AdkNZ2dU7y195kRpvUi25cSDJpkY-HmnlBnQyt7lBKkYSThbKEdaLfJcEgvjDD7yk8c&_nc_zt=24&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=IP7xH5ZFjPG3GuNX1Y6D1g&_nc_ss=8&oh=00_AfzgqUqKDDe80k_5MlXTP8xxNd8GOdob_4E8-whyxXnRug&oe=69BCA089"
				);
				repository.saveAll(List.of(person1));
			} else {
				System.out.println(">>> Bảng Person đã có " + repository.count() + " dữ liệu.");
			}
		};
	}

}
