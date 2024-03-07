import React, {useState} from 'react'
import Registration from './Registration';
import {Link} from 'react-router-dom';
import email from "../loginregister/images/email.png";
import lock from "../loginregister/images/lock.png";
import profile from "../loginregister/images/icon.jpg";
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import "../loginregister/LoginRegister.css";

const client = axios.create({
    baseURL: "http://localhost:8080"
});

function Login() {

    let navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    function onHandle(e) {
        const newUserData = {...userData}
        newUserData[e.target.id] = e.target.value
        setUserData(newUserData);
    }

    async function onSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('userData.email', userData.email);
        console.log('userData.password', userData.password);

        try {
            const response = await client.post('/customers/signIn', {
                email: userData.email,
                password: userData.password,
            });
            console.log('response', response)
            console.log('role', response.data.role)
            if (!response.data.status) throw new Error(`user sign in failed with, Error: ${response.data.message}`)
            console.log(response.data.message)
            if (response.data.role === "Buyer") {
                let path = `/HomeA`;
                navigate(path);
            } else {
                let path = `/HomeB`;
                navigate(path);
            }

        } catch (e) {
            alert('Invalid UserName and Password', e);
        }
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div>
                            <h1 className='LHeader'>Login</h1>
                            <div>
                                <img src={email} alt="emial" className='email' />
                                <input id="email" value={userData.email} onChange={e => onHandle(e)} type="email"
                               placeholder='Enter Email' className='fill' required/>
                            </div>
                            <div className='second-input'>
                                <img src={lock} alt='password' className='email' />
                                <input id="password" value={userData.password} onChange={e => onHandle(e)} type="password"
                               placeholder='Enter Password' className='fill'required/>
                            </div>
                            {/* HERE WITH THE HELP OF LINK PROVIDED BY REACT-ROUTER WE CAN NAVIGATE TO OTHER PAGES 
                                IN LINK WE HAVE TO PASS LOCATION OF THE NAVIGATING PAGE AS PATH IS DEFINED IN THE APP.JS*/}
                            <div className='login-btn'>
                                
                                    <button type="button"onClick={e => onSubmit(e)}>Login</button>
                               
                            </div>
                            <div className='reg-link'>
                                <Link className='link' to='/registration'>
                                    <li>Register Now</li>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login

