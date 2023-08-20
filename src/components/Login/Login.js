import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import './Login.css'

const Login = props => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
    </>
  );
}

export default Login;
