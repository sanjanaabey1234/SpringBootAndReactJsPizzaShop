package com.example.RegistrationLoginPage.repository;

import com.example.RegistrationLoginPage.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    Optional<Customer> findOneByEmailAndPassword(String email, String password);

    Customer findByEmail(String email);
}
