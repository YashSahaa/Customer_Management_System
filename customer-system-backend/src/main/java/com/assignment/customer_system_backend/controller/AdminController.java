package com.assignment.customer_system_backend.controller;

import com.assignment.customer_system_backend.model.Admin;
import com.assignment.customer_system_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @PostMapping("/signup")
    public Admin signUp(@RequestBody Admin admin){
        return adminService.signUp(admin);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Admin admin) {
        return adminService.login(admin.getEmailId(), admin.getPassword());
    }
}
