package com.example.nguyenhuynhquangminh.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "person")
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phone;
    private String address;
    private String description;
    
    @Column(length = 1000)
    private String imageUrl;

    // Constructor không tham số (Bắt buộc cho JPA)
    public Person() {
    }

    // Constructor đầy đủ tham số
    public Person(Long id, String name, String email, String phone, String address, String description, String imageUrl) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
