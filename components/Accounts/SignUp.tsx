import { useEffect, useId, useRef, useState } from 'react';
import { Form, FormContainer, Title } from '../../styles/components/Form/Form.styled';
import Link from 'next/link'
import Button from '@mui/material/Button';
import styles from '../Login/newAccount.module.css';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../util/firebase';


function SignUp() {
    const inputButtonSubmit = useRef<HTMLButtonElement>(null);
    const inputTextField = useRef<HTMLInputElement>(null);
    const [inputs, setInputs] = useState<User>({});
    const id = useId();

    const formStyles: {[key: string]: React.CSSProperties} = {
        input: {
            // width: '50%',
            // border: '1px solid lightBlue',
            // paddingLeft: '7px'
        }
      }


    type User = {
        email?: string,
        pw?: any
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        const valid = e.target.checkValidity();
        console.log(inputs);

        const email = inputs.email;
        const pw = inputs.pw;
        //take user and send to firebase
        
        createUserWithEmailAndPassword(auth, email!, pw!)
            .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        console.log(errorMessage);
                });       
    }
                
                
    const handleOnChange = (e: any) => {
        const name = e?.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))

        if (null != inputButtonSubmit.current) {
            inputButtonSubmit.current.removeAttribute('disabled');
        }

        
        // if (inputTextField.current?.textContent?.length === 0) {
        //     inputButtonSubmit.current?.setAttribute('disabled', 'disabled');       
        // }   else {
        //         if (null != inputButtonSubmit.current) {
        //         inputButtonSubmit.current.removeAttribute('disabled');
        //     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        // }
    }
    
    // useEffect(() => {
    //     console.log(inputTextField.current?.textContent);
    //     inputTextField.current?.focus();
    // },[]);




    return (
        <>
            {/* <h3  style={{color: 'white'}}>Sign up!</h3>
            {<br></br>} */}
            <FormContainer>
                {/* <Title>Sign Up!</Title> */}
                <Title>Create New Account</Title>
                <Form onSubmit={handleOnSubmit}>
                    {/* <input type="text" id={id} ref={inputTextField} onChange={handleOnChange} required maxLength={80} name='fname' placeholder="First Name"/> */}
                    {/* <input style={formStyles.input} type="text" id={id} onChange={handleOnChange} required maxLength={80} name='fname' placeholder="First Name"/>
                    <input style={formStyles.input} type="text" id={id} onChange={handleOnChange} required maxLength={80} name='lname' placeholder="Last Name"/> */}
                    <input ref={inputTextField} style={formStyles.input} type="email" id={'email'} onChange={handleOnChange} required maxLength={80} name='email' placeholder="Email" autoComplete='on'/>
                    <input style={formStyles.input} type="password" id={'pw'} onChange={handleOnChange} required minLength={6} maxLength={12} name='pw' placeholder="Password" autoComplete='on'/>
                    {/* <Button ref={inputButtonSubmit} className={styles.formButton} color='secondary' variant='contained' component='button' onClick={handleOnSubmit} disabled>Submit</Button> */}
                    <Button ref={inputButtonSubmit} onChange={handleOnChange} className={styles.formButton} color='secondary' variant='contained' component='button' onClick={handleOnSubmit} type='submit'>Sign Up</Button>
                </Form>
                <p style={{color: '#2473a8', flex: .1, textDecoration: 'underline'}}>Have an account? <Link href='/login'>Login</Link></p>
            </FormContainer>
        </>
    )
}

export default SignUp