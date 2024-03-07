import React, {useState, useEffect} from 'react'
import Login from './Login';
import {Link,useNavigate} from 'react-router-dom';
import mail from "../loginregister/images/email.png";
import lock from "../loginregister/images/lock.png";
import profile from "../loginregister/images/icon.jpg";
import axios from "axios";
import "../loginregister/LoginRegister.css";

const client = axios.create({
    baseURL: "http://localhost:8080"
});

export default function Registration() {
    
    //let navigate = useNavigate();

    const [userData, setUserData] = useState({
        employeeName: "",
        email: "",
        role: "",
        password: ""
    });

    function handle(e) {
        const newUserData = {...userData}
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData);
    }

    async function submit(e) {
        e.preventDefault();
        const response = await client.post('/customers/signUp', {
            employeeName: userData.employeeName,
            email: userData.email,
            role: userData.role, 
            password: userData.password
        })
        console.log('response.data', response.data)
        console.log('userData.role', userData.role)

        if (userData.role === "Buyer") {
            let path = `/HomeA`;
            //navigate(path);
        } else {
            let path = `/HomeB`;
            //navigate(path);
        }
    }

    return (
        <form onSubmit={e => submit(e)}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                    <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div>
                            <h1>Registration</h1>
                           
                            <div className='mail-id'>
                                <img src={mail} alt="emial" className='email' />
                                <input id="employeeName" value={userData.employeeName} onChange={e => handle(e)} type="text"
                               placeholder='Enter Your Full Name' className='fill' required/>
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="emial" className='email' />
                                <input id="email" value={userData.email} type="email" onChange={e => handle(e)}
                               placeholder='Enter Your Email' className='fill'  required />
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="emial" className='email' />
                                <input id="password" value={userData.password} type="password" onChange={e => handle(e)}
                               placeholder='Enter Your password' className='fill' required/>
                            </div>
                            <div className='select'>
                                {/* <label className='plist'>Intrest</label> */}
                                    <select id="role" value={ userData.role} onChange={e => handle(e)}  required>
                                    <option value="">Select Role</option>
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>
                                    </select>
                            </div>
                            <div className='login-btn'>
                                
                                    <button type="submit">Register</button>
                                
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then</p><a className='link' href='/'><li>Login!!!</li></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
