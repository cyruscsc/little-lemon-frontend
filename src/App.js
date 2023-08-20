import { useState, useMemo, useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Base from './components/Base/Base';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserContext from './UserContext'

const backendDomain = 'http://127.0.0.1:8000';

const App = () => {
  const [sessionExists, setSessionExists] = useState(false);
  const [user, setUser] = useState(null);
  const userData = useMemo(({ user, setUser }), [user, setUser]);

  const getSession = async () => {
    fetch(`${backendDomain}/api/session`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => {
      res.json();
    })
    .then(data => {
      setSessionExists(data['session_exists']);
    })
    .catch(err => {
      console.log(err);
    })
  }

  const getUser = () => {
    fetch(`${backendDomain}/api/user`, {
      method: 'GET',
      credentials: 'same-origin',
    })
    .then(res => {
      res.json();
    })
    .then(data => {
      setUser(data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getSession()
    .then(() => {
      if (sessionExists) {
        getUser();
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider userData={userData}>
      <Base>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Base>
    </UserContext.Provider>
  );
}

export default App;
