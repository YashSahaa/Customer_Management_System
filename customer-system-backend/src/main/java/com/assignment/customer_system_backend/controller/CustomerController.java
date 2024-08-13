package com.assignment.customer_system_backend.controller;

import com.assignment.customer_system_backend.entity.CustomerEntity;
import com.assignment.customer_system_backend.model.Customer;
import com.assignment.customer_system_backend.model.SearchDTO;
import com.assignment.customer_system_backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/addcustomer")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }

    @GetMapping("/getcustomers")
    public List<Customer> getCustomer(){
        return customerService.getCustomer();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCustomer(@PathVariable Long id){
        boolean deleted = false;
        deleted=customerService.deleteCustomer(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/getcustomer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id){
        Customer customer  = null;
        customer = customerService.getCustomerById(id);
        return ResponseEntity.ok(customer);
    }

    @PutMapping("/updatecustomer/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id,@RequestBody Customer customer){
        customer = customerService.updateCustomer(id,customer);
        return ResponseEntity.ok(customer);
    }

    @PostMapping("/getsearchcustomers")
    public List<Customer> getCustomerSearch(@RequestBody SearchDTO attribute){
        return customerService.getCustomerSearch(attribute.getType(), attribute.getSearch());
    }
}
