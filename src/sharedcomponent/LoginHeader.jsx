import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import loginLogo from '../assets/images/logo.png';

function LoginHeader(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="loginHeader clearfix">
      <img className='loginLogo' src={loginLogo} alt="" />
      <ul>
        <li><Link to="/Login">Login</Link> </li>
        <li><Link to="/Signup">Signup</Link> </li>
      </ul>
    </div>
  );
}

export default LoginHeader;