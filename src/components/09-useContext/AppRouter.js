import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { AboutScreen } from './screens/AboutScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path='/' element={ <HomeScreen /> } />
          <Route path='/login' element={ <LoginScreen /> } />
          <Route path='/about' element={ <AboutScreen /> } />

          <Route path='*'  element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
