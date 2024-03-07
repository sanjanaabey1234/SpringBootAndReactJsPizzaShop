package com.example.RegistrationLoginPage.response;

public class LoginResponse {

    String message;
    Boolean status;
    String role;

    public LoginResponse(String message, Boolean status, String role) {
        this.message = message;
        this.status = status;
        this.role = role;
    }

    public LoginResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                ", role='" + role + '\'' +
                '}';
    }
}
