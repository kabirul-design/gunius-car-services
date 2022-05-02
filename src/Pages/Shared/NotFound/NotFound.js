import React from 'react';
import notFound from '../../../images/error.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 h-70' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;