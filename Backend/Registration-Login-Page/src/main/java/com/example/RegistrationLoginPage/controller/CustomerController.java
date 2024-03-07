package com.example.RegistrationLoginPage.controller;

import com.example.RegistrationLoginPage.dto.CustomerDTO;
import com.example.RegistrationLoginPage.dto.LoginDTO;
import com.example.RegistrationLoginPage.entity.Customer;
import com.example.RegistrationLoginPage.response.LoginResponse;
import com.example.RegistrationLoginPage.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customers")

public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping(path = "/signUp")
    public String saveEmployee(@RequestBody CustomerDTO customerDTO) {
        return customerService.addEmployee(customerDTO);
    }

    @PostMapping(path = "/signIn")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = customerService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/customers")
    public List<Customer> getAllUsers() {
        return (List<Customer>) customerService.getAllEmployee();
    }
}
