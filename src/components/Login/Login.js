import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext';
import { useCsrfToken } from '../../useCsrfToken';
import './Login.css'

const Login = props => {
  const { user, setUser } = useContext(UserContext);
  const csrfToken = useCsrfToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const validForm = () => username && password;

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${props.backendDomain}/api/login`, {
      method: 'POST',
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      clearForm();
    })
    .catch(err => {
      console.log(err);
    });
  }

  const clearForm = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <section id='loginform'>
      <div className='super-container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <label htmlFor='username'>Username</label>
            <input type='text' name='username' value={username}
              onChange={e => {setUsername(e.target.value)}}
              required id='username' className='input-box bg-green text-white medium-16'
            />
          </div>
          <div className='input-container'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={password}
              onChange={e => {setPassword(e.target.value)}}
              required id='password' className='input-box bg-green text-white medium-16'
            />
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green button-text' disabled={!validForm()}>Login</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
