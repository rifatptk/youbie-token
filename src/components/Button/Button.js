import React from 'react';
import './Button.css'

const Button = ({text}) => {
    return (
        <button className='comonBtn text-capitalize text-white text-center fw-bold'>{text}</button>
    );
};

export default Button;