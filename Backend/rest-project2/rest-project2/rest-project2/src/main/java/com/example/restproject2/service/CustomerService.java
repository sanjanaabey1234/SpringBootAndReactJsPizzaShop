/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.restproject2.service;

import com.example.restproject2.entity.Customer;
import com.example.restproject2.repository.CustomerRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerrep;
    
    public List<Customer>findAllcustomers()
    {
        return customerrep.findAll();
    }
    
    public Customer getUserId(int id)
    {
        Optional<Customer> customertOptional = customerrep.findById(id);
        return customertOptional.get();
    }
    
    public Customer createCustomer(Customer customer) {
        return customerrep.save(customer);
    }
        
    public Customer updateCustomer(Customer customer) {
        return customerrep.save(customer);
    }
    
    public void deleteCustomerById(int id) {
        customerrep.deleteById(id);
    }
}
