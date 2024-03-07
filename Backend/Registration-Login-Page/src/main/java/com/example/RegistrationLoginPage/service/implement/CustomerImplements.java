package com.example.RegistrationLoginPage.service.implement;

import com.example.RegistrationLoginPage.dto.CustomerDTO;
import com.example.RegistrationLoginPage.dto.LoginDTO;
import com.example.RegistrationLoginPage.entity.Customer;
import com.example.RegistrationLoginPage.repository.CustomerRepository;
import com.example.RegistrationLoginPage.response.LoginResponse;
import com.example.RegistrationLoginPage.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerImplements implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(CustomerDTO customerDTO) {

        Customer customer = new Customer(

                customerDTO.getEmployeeId(),
                customerDTO.getEmployeeName(),
                customerDTO.getEmail(),
                customerDTO.getRole(),

                this.passwordEncoder.encode(customerDTO.getPassword())

        );

        customerRepository.save(customer);


        return customer.getCustomerName();
    }

    public List<Customer> getAllEmployee() {
        return customerRepository.findAll();
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        Customer customer1 = customerRepository.findByEmail(loginDTO.getEmail());
        if (customer1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = customer1.getPassword();
            String role = customer1.getRole();
            boolean isPasswordRight = passwordEncoder.matches(password, encodedPassword);
            if (isPasswordRight) {
                Optional<Customer> employee = customerRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    System.out.println("🐤");
                    System.out.println(role);
                    return new LoginResponse("Login Successfully", true, role);
                } else {
                    return new LoginResponse("Login Failed.....", false, null);
                }
            } else {
                return new LoginResponse("Password Not Match", false, null);
            }
        } else {
            return new LoginResponse("Email Not Match", false, null);
        }
    }
}
