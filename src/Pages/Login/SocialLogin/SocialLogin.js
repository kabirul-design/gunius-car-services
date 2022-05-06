import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/signlogo/Logo-google.png';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
         errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
      }
      if(loading || loading1){
        return <Loading></Loading>;
      }
      if(user || user1){
        navigate('/home');
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-1'>Or</p>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
        </div>
        {errorElement}
        <div className=''>
            <button 
                onClick={() => signInWithGoogle()}
                className='btn btn-primary w-50 d-block mx-auto my-3'>
                <img src={google} alt="" />
                <span className='px-2'>Google SignIn</span>
            </button>
            <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                <img src={google} alt="" />
                <span className='px-2'>Facebook SignIn</span>
            </button>
            <button 
                 onClick={() => signInWithGithub()}
                 className='btn btn-primary w-50 d-block mx-auto'>
                <img src={google} alt="" />
                <span className='px-2'>Github SignIn</span>
            </button>
        </div>
   </div>
    );
};

export default SocialLogin;