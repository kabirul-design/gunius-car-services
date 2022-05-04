import React from 'react';
import google from '../../../images/signlogo/Logo-google.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-1'>Or</p>
            <div style={{height: '1px'}} className='bg-primary w-50'></div>
        </div>
        <div className=''>
            <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                <img src={google} alt="" />
                <span className='px-2'>Google SignIn</span>
            </button>
            <button className='btn btn-primary w-50 d-block mx-auto my-3'>
                <img src={google} alt="" />
                <span className='px-2'>Facebook SignIn</span>
            </button>
            <button className='btn btn-primary w-50 d-block mx-auto'>
                <img src={google} alt="" />
                <span className='px-2'>Github SignIn</span>
            </button>
        </div>
   </div>
    );
};

export default SocialLogin;