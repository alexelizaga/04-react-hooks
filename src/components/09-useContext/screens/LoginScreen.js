import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginScreen = () => {
  const {user, setUser} = useContext(UserContext);

  console.log(user);

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
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
