import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { AboutScreen } from './AboutScreen';
import { NavBar } from './components/NavBar';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

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
