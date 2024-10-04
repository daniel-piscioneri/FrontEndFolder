import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import '../Login.css';
import { Link, Navigate } from "react-router-dom";
import { signInWithGooglePopup, createUserDocFromAuth, signInWithEmail, auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
}

function Login() {
    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact;

    console.log(contact);

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoggedIn(false)

        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            setIsLoggedIn(true);
        } catch (error) {
            console.log("error in logging in. ", error.message);
            alert(error.message);
        }

    }

    if (isLoggedIn) {
        console.log("inside if")
        return <Navigate to='/' />
    }

    return (
        <div className="login">
            <div className="inputs">
            <Input name='email' type='email' placeholder='email' onChange={handleChange} value={contact.email}></Input>
            <Input name='password' type='password' placeholder='password' onChange={handleChange} value={contact.password}></Input></div>
            <div className="buttons"><button onClick={handleSubmit} className="login-button">Login</button>
                <div className="g-sign-in-button">
                    <div className="content-wrapper">
                        <div className="logo-wrapper">
                            <img src="https://developers.google.com/identity/images/g-logo.png" />
                        </div>
                        <span className="text-container">
                            <span><button onClick={logGoogleUser} className="google-button"> Log In With Google
                            </button></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="sign-up-link">
            <Link to='/signup'>
                Sign Up Instead
            </Link></div>
        </div>);
}

export default Login;