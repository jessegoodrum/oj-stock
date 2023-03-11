import {useState} from 'react'

import { Form } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase-utils/firebase.utils.js';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss'
const defaultFormFields = {
    displayName: '',
    email: '',
    passowrd: '',
    confirmPassord: ''
}

export default function SignUpForm(){
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target; 

        setFormFields({...formFields, [name] : value})
    };

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match")
            return; 
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, {displayName});
            
            resetFormFields()

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot Create User, Email in use')
            }
            console.log("user creation encountered an error", error)
        }
            
        

        }

       
    

        return (
            <div className='sign-up-container'>
              <h2>Don't have an account?</h2>
              <span>Sign up with your email and password</span>
              <form onSubmit={handleSubmit}>
                <FormInput
                  label='Display Name'
                  type='text'
                  required
                  onChange={handleChange}
                  name='displayName'
                  value={displayName}
                />
        
                <FormInput
                  label='Email'
                  type='email'
                  required
                  onChange={handleChange}
                  name='email'
                  value={email}
                />
        
                <FormInput
                  label='Password'
                  type='password'
                  required
                  onChange={handleChange}
                  name='password'
                  value={password}
                />
        
                <FormInput
                  label='Confirm Password'
                  type='password'
                  required
                  onChange={handleChange}
                  name='confirmPassword'
                  value={confirmPassword}
                />
                <Button type='submit'>Sign Up</Button>
              </form>
            </div>
          );
}