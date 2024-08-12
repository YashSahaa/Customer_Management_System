package com.assignment.customer_system_backend.repository;

import com.assignment.customer_system_backend.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepo extends JpaRepository<AdminEntity,String> {
}
