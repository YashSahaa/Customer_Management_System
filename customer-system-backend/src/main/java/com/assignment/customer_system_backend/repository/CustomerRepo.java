package com.assignment.customer_system_backend.repository;

import com.assignment.customer_system_backend.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepo extends JpaRepository<CustomerEntity,Long> {
    @Query("SELECT c FROM CustomerEntity c WHERE c.firstName LIKE %:keyword% OR c.emailId LIKE %:keyword% OR c.city LIKE %:keyword% OR c.state LIKE %:keyword%")
    List<CustomerEntity> searchByKeyword(@Param("keyword") String keyword);
}
