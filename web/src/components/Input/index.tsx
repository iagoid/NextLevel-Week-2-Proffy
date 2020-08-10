import React, { InputHTMLAttributes } from 'react'

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

// Pega as propriedades do InputProps além de todas 
// As outras propriedades que um input pode ter pelo ...rest
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} />
    </div>
    );
}


export default Input;