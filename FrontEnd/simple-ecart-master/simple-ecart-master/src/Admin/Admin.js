import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', price: 0, description: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products/get');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = async () => {
    try {
      await axios.post('http://localhost:8080/products/add', newCustomer);
      setNewCustomer({ name: '', price: 0, description: '' });
      fetchCustomers();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  const handleDeleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/products/delete/${id}`);
      fetchCustomers();
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - ${customer.price} - {customer.description}
            <button onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add New Customer</h2>
        <label>Name: </label>
        <input type="text" name="name" value={newCustomer.name} onChange={handleInputChange} />
        <br />
        <label>Price: </label>
        <input type="number" name="price" value={newCustomer.price} onChange={handleInputChange} />
        <br />
        <label>Description: </label>
        <input type="text" name="description" value={newCustomer.description} onChange={handleInputChange} />
        <br />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>
    </div>
  );
};

export default Admin;
