import React from 'react'

import { AppRouter } from './AppRouter';
import { UserContext } from './context/UserContext';

export const MainApp = () => {
  const user = {
    id: 1234,
    name: 'Alex',
    email: 'alex@alex.com'
  }
  return (
    <UserContext.Provider value={user}>
      <AppRouter/>
    </UserContext.Provider>
  )
}
