import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {img, name, description,id, price} = service;
    const navigate = useNavigate();
    const navigateButtonHandler = (id) =>{
        navigate(`/service/${id}`);
    }
    return (
        <div id='service' className='service-content'>
            <img className='w-100' src={img} alt="" />
            <h3>service : {name}</h3>
            <p>Price : {price}</p>
            <p><small>Description : {description}</small></p>
            <button onClick={ () =>navigateButtonHandler(id)}>Book {name}</button>
        </div>
    );
};

export default Service;