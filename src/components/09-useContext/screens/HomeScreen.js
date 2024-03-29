import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>
        { JSON.stringify(user, null, 4) }
      </pre>
    </div>
  );
};
