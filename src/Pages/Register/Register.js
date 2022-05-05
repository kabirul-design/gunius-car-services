import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification :true});

      const [updateProfile, updating, error1] = useUpdateProfile(auth);

      

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }

    if(user){
       console.log('user', user);
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName : name });
          console.log('Updated profile');
          navigate('/home');
    }
    return (
        <div className='register-container'>
            <h2 style={{textAlign: 'center', marginBottom: 30}}>Register Now</h2>
            <form onSubmit={handleRegister}>
            <input type="text" name='name' id='' placeholder='Your Name' />
            <input type="email" name="email" id="" placeholder='Enter Email' required />
            <input type="password" name="password" id="" placeholder='password' required/>
            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
            {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label> */}
            <label className={`ps-2 ${agree? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
            <input 
            disabled={!agree}
                 className='mt-2' 
                 type="submit" 
                 value="Register" />
            </form>

            <p>Already have an Account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;