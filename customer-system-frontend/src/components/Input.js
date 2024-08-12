

import React from 'react';

const Input = ({type, label, name, state, setState, placeholder}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if(e.target.name==="confirmPassword"){
      setState(value);
    }
    else{
      setState({...state,[e.target.name]:value});
    }
    
  };

  return (
    <div className='input-wrapper'>
      <p className='label-input'>{label}</p>
      <input type={type} value={name === "confirmPassword" ? state : state[name]} name={name} placeholder={placeholder} onChange={handleChange} className='custom-input' />
    </div>
  );
};

export default Input;
