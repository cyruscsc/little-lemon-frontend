import React, { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import './Register.css';

const Register = props => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usernameIsAvailable, setUsernameIsAvailable] = useState(false);
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailIsAvailable, setEmailIsAvailable] = useState(false);
  const [emailMsg, setEmailMsg] = useState('');
  const usernameHasLength = username => username.length >= 4 && username <= 20;
  const usernameHasNoSpecialChar = username => !/\W+/.test(username);
  const validUsername = () => usernameHasLength() && usernameHasNoSpecialChar() && usernameIsAvailable;
  const emailIsvalid = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const validEmail = () => emailIsvalid() && emailIsAvailable;
  const passwordHasLength = password => password.length >= 6 && password.length <= 20;
  const passwordHasNum = password => /\d+/.test(password);
  const passwordHasUpperChar = password => /[A-Z]+/.test(password);
  const passwordHasLowerChar = password => /[a-z]+/.test(password);
  const validPassword = () => passwordHasLength() && passwordHasNum() && passwordHasLowerChar() && passwordHasUpperChar();
  const validForm = () => validUsername() && validEmail() && validPassword();

  const checkUsername = e => {
    fetch(`${props.backendDomain}/api/checkusername`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
      },
      body: {
        'username': username,
      },
    })
    .then(res => {
      res.json()
    })
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
      body: {
        'email': email,
      },
    })
    .then(res => {
      res.json()
    })
    .then(data => {
      setEmailIsAvailable(data.available);
      setEmailMsg(data.message);
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <>
    </>
  );
}

export default Register;
