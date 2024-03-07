/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.order.controller;

import com.example.order.entity.Order;
import com.example.order.service.OrderService;
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

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;
    
    @GetMapping(path = "/get")
    public List<Order> getAllCustomer()
    {
       return orderService.findAllcustomers();
    }
    
     @GetMapping(path = "/get/{id}")
    public Order getCustomerById(@PathVariable int id) {
        return (Order) orderService.getUserId(id);
    }
    
    @PostMapping(path = "/add")
    public Order createCustomer(@RequestBody Order customer) {
        return orderService.createCustomer(customer);
    }
    
    @PutMapping(path = "/update")
    public Order updateCustomer(@RequestBody Order customer) {
        return orderService.updateCustomer(customer);
    }
    
    @DeleteMapping(path = "/delete/{id}")
    public void deleteCustomerById(@PathVariable int id) {
        orderService.deleteCustomerById(id);
    }
}
