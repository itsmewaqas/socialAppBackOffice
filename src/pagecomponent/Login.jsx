import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { Grid, Container, Input, TextField, Button, item, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import LoginHeader from '../sharedcomponent/LoginHeader';
import LoginFooter from '../sharedcomponent/LoginFooter';

function Login() {

  const [username, usernameSet] = useState("");
  const [password, passwordSet] = useState("");
  const [nameErr, nameErrSet] = useState("");
  const [passErr, passErrSet] = useState("");

  function clearSubmission() {
    nameErrSet("");
    passErrSet("");
  }

  let history = useHistory();

  // function signIn() {
  //   clearSubmission();
  //   if (username == undefined || username == "") {
  //     nameErrSet("username Is required");
  //   }
  //   if (password == undefined || password == "") {
  //     passErrSet("password Is required");
  //   }
  //   else {
  //     if (username == 'admin' && password == 'admin') {
  //       history.push('/Dashboard');
  //     }
  //     else {
  //       alert("please enter valid credential and you can not login before sign up. please before login you have to sign up :( ");
  //     }
  //   }
  //   console.log(` ${username} ${password}`);
  // }



  function signIn() {
    clearSubmission();
    if (username == undefined || username == "") {
      nameErrSet("username Is required");
    }
    if (password == undefined || password == "") {
      passErrSet("password Is required");
    }
    else {
      if (username == localStorage.getItem('username') && password == localStorage.getItem('password')) {
        history.push('/Dashboard');
      }
      else {
        alert("please enter valid credential and you can not login before sign up. please before login you have to sign up :( ");
      }
    }
    console.log(` ${username} ${password}`);
  }



  useEffect(() => {
  }, [])

  return (
    <div className="adminWrapper">
      <header>
        <LoginHeader />
      </header>
      <main>
        <div className='loginFormBox'>
          <p className='loginTitle'> Administrator Login<span> Login Safe And Secure :)</span></p>
          <TextField
            id="Username"
            label="Username"
            margin="normal"
            color="secondary"
            type="text"
            placeholder="Enter Your Username"
            fullWidth={true}
            value={username}
            onChange={e => usernameSet(e.target.value)}
          />
          <p className='error'>{nameErr}</p>
          <TextField
            id="Password"
            label="Password"
            margin="normal"
            color="secondary"
            type="password"
            placeholder="Enter Your Password"
            fullWidth={true}
            value={password}
            onChange={e => passwordSet(e.target.value)}
          />
          <p className='error'>{passErr}</p>
          <Button variant="contained" color="secondary" type="submit" onClick={() => signIn()}>Login</Button>
        </div>
      </main>
      <footer>
        <LoginFooter />
      </footer>
    </div>
  );
}

export default Login;
