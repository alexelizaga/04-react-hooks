import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {
  const {user, setUser} = useContext(UserContext);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        data-testid='LoginScreenBtn'
        className='btn btn-primary'
        onClick={ () => setUser({
          id: 123,
          name: 'Alex'
        })}
      >
        Login
      </button>
    </div>
  );
};
