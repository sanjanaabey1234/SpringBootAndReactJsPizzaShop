package com.example.RegistrationLoginPage.entity;

import javax.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Id;
    @Column(name = "customer_name", length = 255)
    private String customerName;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "role", length = 255)
    private String role;

    @Column(name = "password", length = 255)
    private String password;

    public Customer(int Id, String customerName, String email, String role, String password) {
        this.Id = Id;
        this.customerName = customerName;
        this.email = email;
        this.role = role;
        this.password = password;
    }

    public Customer() {
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        this.Id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
