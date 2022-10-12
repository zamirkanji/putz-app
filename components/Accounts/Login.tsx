import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { stringLength } from '@firebase/util';
import React, { useEffect, useState, useRef } from 'react'
import { FormContainer, Form, Title } from "../../styles/components/Form/Form.styled";
import { Button } from "@mui/material";
import styles from '../Login/newAccount.module.css';
import Link from "next/link";
// import '../Login/login.css';


function Login() {
    //states
    const [isChanged, setIsChanged] = useState(false);
    const inputSubmit = useRef<HTMLInputElement>(null);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleSubmit = (data: any) => {
        console.log(data);
        return (
            <div>{data}</div>
        )
    }
    const handleChange = (e: any) => {
        setIsChanged(true);
        if (null != inputSubmit.current) {
            console.log(inputSubmit.current);
            inputSubmit.current.removeAttribute('disabled');
        }
        console.log(e.target.value);
    }


    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        console.log(data);
        const email = data.email;
        const password= data.password;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email!, password!)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    function user (fname: string, lname: string, email: string, pw: any) {
        const logObject = () => [fname, lname];

        const handleUserInfo = () => {
            //send info to database
        }

        return {
            fname, lname, logObject
        }
    }

    return (
        <FormContainer>
                <Title>Login To Your Account</Title>
                <Form onSubmit={handleOnSubmit}>
                        <input type="email" required maxLength={80} placeholder="Email"/>
                        <input type="password" required maxLength={80} minLength={5} placeholder="Password"/>
                        <Button className={styles.formButton} color='secondary' variant='contained' component='button' onClick={handleOnSubmit}>Sign In</Button>
                </Form>
                <p style={{color: '#2473a8', flex: .1, textDecoration: 'underline'}}>New? <Link href='/newaccount'>Create an Account</Link></p>
        </FormContainer>
    )
}

export default Login