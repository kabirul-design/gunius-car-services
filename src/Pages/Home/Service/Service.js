import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {img, name, description,id, price} = service;
    return (
        <div className='service-content'>
            <img className='w-100' src={img} alt="" />
            <h3>service : {name}</h3>
            <p>Price : {price}</p>
            <p><small>Description : {description}</small></p>
            <button>Book {name}</button>
        </div>
    );
};

export default Service;