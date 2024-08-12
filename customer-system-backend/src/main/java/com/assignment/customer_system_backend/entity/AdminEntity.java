package com.assignment.customer_system_backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "admin")
public class AdminEntity {
    @Id
    private String emailId;
    private String name;
    private String password;
}
