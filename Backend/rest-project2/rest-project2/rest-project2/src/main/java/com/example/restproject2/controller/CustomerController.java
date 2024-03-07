/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.restproject2.controller;

import com.example.restproject2.entity.Customer;
import com.example.restproject2.service.CustomerService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Admin
 */

@RestController
@RequestMapping("/products")
@CrossOrigin
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    
    @GetMapping(path = "/get")
    public List<Customer> getAllCustomer()
    {
       return customerService.findAllcustomers();
    }
    
     @GetMapping(path = "/get/{id}")
    public Customer getCustomerById(@PathVariable int id) {
        return (Customer) customerService.getUserId(id);
    }
    
    @PostMapping(path = "/add")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }
    
    @PutMapping(path = "/update")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return customerService.updateCustomer(customer);
    }
    
    @DeleteMapping(path = "/delete/{id}")
    public void deleteCustomerById(@PathVariable int id) {
        customerService.deleteCustomerById(id);
    }
}
