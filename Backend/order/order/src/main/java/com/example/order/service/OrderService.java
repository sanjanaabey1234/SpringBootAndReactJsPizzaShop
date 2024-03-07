/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.order.service;

import com.example.order.entity.Order;
import com.example.order.repository.OrderRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Admin
 */
@Service
public class OrderService {
    @Autowired
    private OrderRepository customerrep;
    
    public List<Order>findAllcustomers()
    {
        return customerrep.findAll();
    }
    
    public Order getUserId(int id)
    {
        Optional<Order> customertOptional = customerrep.findById(id);
        return customertOptional.get();
    }
    
    public Order createCustomer(Order customer) {
        return customerrep.save(customer);
    }
        
    public Order updateCustomer(Order customer) {
        return customerrep.save(customer);
    }
    
    public void deleteCustomerById(int id) {
        customerrep.deleteById(id);
    }
}
