import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { useCsrfToken } from '../../useCsrfToken';
import './Register.css';

const Register = props => {
  const { user, setUser } = useContext(UserContext);
  const csrfToken = useCsrfToken();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameIsAvailable, setUsernameIsAvailable] = useState(false);
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailIsAvailable, setEmailIsAvailable] = useState(false);
  const [emailMsg, setEmailMsg] = useState('');
  const usernameHasLength = () => username.length >= 4 && username.length <= 20;
  const usernameHasNoSpecialChar = () => !/\W+/.test(username);
  const validUsername = () => usernameHasLength() && usernameHasNoSpecialChar() && usernameIsAvailable;
  const emailIsvalid = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const validEmail = () => emailIsvalid() && emailIsAvailable;
  const passwordHasLength = () => password.length >= 6 && password.length <= 20;
  const passwordHasNum = () => /\d+/.test(password);
  const passwordHasUpperChar = () => /[A-Z]+/.test(password);
  const passwordHasLowerChar = () => /[a-z]+/.test(password);
  const validPassword = () => passwordHasLength() && passwordHasNum() && passwordHasLowerChar() && passwordHasUpperChar();
  const validForm = () => validUsername() && validEmail() && validPassword();

  const checkUsername = e => {
    fetch(`${props.backendDomain}/api/checkusername`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
    .then(res => res.json())
    .then(data => {
      setUsernameIsAvailable(data.available);
      setUsernameMsg(data.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const checkEmail = e => {
    fetch(`${props.backendDomain}/api/checkemail`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
    .then(res => res.json())
    .then(data => {
      setEmailIsAvailable(data.available);
      setEmailMsg(data.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${props.backendDomain}/api/register`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({
        username: username,
        email: email,
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
    setEmail('');
    setPassword('');
  }

  return (
    <section id='registerform'>
      <div className='super-container'>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-container'>
            <input type='text' name='username' value={username}
              onChange={e => {setUsername(e.target.value)}}
              onBlur={() => {checkUsername()}}
              required id='username' className='input-box bg-green text-white medium-16'
            />
            <label htmlFor='username'>Username</label>
          </div>
          <div className='input-container'>
            <input type='email' name='email' value={email}
              onChange={e => {setEmail(e.target.value)}}
              onBlur={() => {checkEmail()}}
              required id='email' className='input-box bg-green text-white medium-16'
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='input-container'>
            <input type='password' name='password' value={password}
              onChange={e => {setPassword(e.target.value)}}
              required id='password' className='input-box bg-green text-white medium-16'
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='input-container'>
            <button type='submit' className='button bold-18 booking-button bg-yellow text-green button-text' disabled={!validForm()}>Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
