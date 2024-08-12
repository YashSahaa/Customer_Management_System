package com.assignment.customer_system_backend.service;

import com.assignment.customer_system_backend.entity.AdminEntity;
import com.assignment.customer_system_backend.entity.CustomerEntity;
import com.assignment.customer_system_backend.model.Admin;
import com.assignment.customer_system_backend.repository.AdminRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    AdminRepo adminRepo ;

    public Admin signUp(Admin admin) {
        AdminEntity adminEntity = new AdminEntity();
        BeanUtils.copyProperties(admin,adminEntity);
        adminRepo.save(adminEntity);
        return admin;
    }

    public boolean login(String emailId, String password) {
        if (adminRepo.existsById(emailId)) {
            AdminEntity adminEntity = adminRepo.findById(emailId).get();
            return password.equals(adminEntity.getPassword());
        }
        return false;
    }
}
