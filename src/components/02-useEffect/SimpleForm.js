import React, { useEffect, useState } from 'react';

import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('formState Cambio');
  }, [formState]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    })
  }
  
  return (
    <div>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      { (name === '123') && <Message />}
    </div>
  )
}
