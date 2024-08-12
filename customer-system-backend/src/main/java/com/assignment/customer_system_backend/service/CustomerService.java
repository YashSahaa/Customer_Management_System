package com.assignment.customer_system_backend.service;

import com.assignment.customer_system_backend.entity.CustomerEntity;
import com.assignment.customer_system_backend.model.Customer;
import com.assignment.customer_system_backend.repository.CustomerRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    @Autowired
    CustomerRepo customerRepo;
    public Customer addCustomer(Customer customer) {
        CustomerEntity customerEntity = new CustomerEntity();
        BeanUtils.copyProperties(customer,customerEntity);
        customerRepo.save(customerEntity);
        return customer;
    }

    public List<Customer> getCustomer() {
        List<CustomerEntity> customerEntityList  = customerRepo.findAll();
        List<Customer> customers = customerEntityList.stream().map(cus -> new Customer(
                cus.getId(),cus.getFirstName(),cus.getLastName(),cus.getStreet(),cus.getAddress(),cus.getCity(),cus.getState(),cus.getEmailId(),cus.getPhoneNumber()
        )).collect(Collectors.toList());
        return customers;
    }

    public boolean deleteCustomer(Long id) {
        CustomerEntity customerEntity = customerRepo.findById(id).get();
        customerRepo.delete(customerEntity);
        return true;
    }

    public Customer getCustomerById(Long id) {
        CustomerEntity customerEntity = customerRepo.findById(id).get();
        Customer customer = new Customer();
        BeanUtils.copyProperties(customerEntity,customer);
        return customer;
    }

    public Customer updateCustomer(Long id, Customer customer) {
        CustomerEntity customerEntity = customerRepo.findById(id).get();
        customerEntity.setFirstName(customer.getFirstName());
        customerEntity.setLastName(customer.getLastName());
        customerEntity.setStreet(customer.getStreet());
        customerEntity.setAddress(customer.getAddress());
        customerEntity.setCity(customer.getCity());
        customerEntity.setState(customer.getState());
        customerEntity.setEmailId(customer.getEmailId());
        customerEntity.setPhoneNumber(customer.getPhoneNumber());

        customerRepo.save(customerEntity);
        return customer;
    }
}
