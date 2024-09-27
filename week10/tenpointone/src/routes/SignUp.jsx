import React, { useState } from "react";
import Input from "../Input";
import '../SignUp.css'
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../utils/firebase";

const SignUp = (props) => {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName })
        } catch (error) {
            console.log("error in creating user", error.message);
        }
    }
    return <div className="login">
        <div className="inputs">
            <Input name='displayName'
                type='text'
                placeholder='name'
                onChange={handleChange}
                value={contact.displayName} />
            <Input name='email' type='email' placeholder='email' onChange={handleChange} value={contact.email}></Input>
            <Input name='password' type='password' placeholder='password' onChange={handleChange} value={contact.password}></Input>
            <Input name='confirmPassword' type='password' placeholder='confirm password' onChange={handleChange} value={contact.confirmPassword}></Input></div>
        <div className="signup-button">
            <button onClick={handleSubmit}>SignUp</button>
        </div>
        <div className="sign-up-link">
            <Link to='/login'>
                Log In Instead
            </Link>
        </div>
    </div>
}

export default SignUp;