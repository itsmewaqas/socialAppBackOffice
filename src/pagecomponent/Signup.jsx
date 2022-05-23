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

function Signup() {

  const [id, idSet] = useState("");
  const [username, usernameSet] = useState("");
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [cell, cellSet] = useState("");
  const [city, citySet] = useState("");
  const [country, countrySet] = useState("");
  const [signupData, signupDataSet] = useState([]);

  let history = useHistory();

  function signUp() {
    const newRowData = ({
      id: signupData.length + 1,
      username: username,
      password: password,
      email: email,
      cell: cell,
      city: city,
      country: country,
    })
    const userDataTemp = [...signupData];
    userDataTemp.push(newRowData);
    signupDataSet(userDataTemp);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    history.push('/Login');
    console.log(userDataTemp);
  }

  // if (username == undefined || username == "") {
  //   nameErrSet("username Is required");
  // }
  // if (password == undefined || password == "") {
  //   passErrSet("password Is required");
  // }
  // else {
  //   if (username == 'admin' && password == 'admin') {
  //     history.push('/Dashboard');
  //   }
  //   else {
  //     alert("please enter valid credential and you can not login before sign up. please before login you have to sign up :( ");
  //   }
  // }
  // console.log(` ${username} ${password}`);


  useEffect(() => {
  }, [])

  return (
    <div className="adminWrapper">
      <header>
        <LoginHeader />
      </header>
      <main>
        <div className='loginFormBox'>
          <p className='loginTitle'> Signup<span> Signup Safe And Secure :)</span></p>
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
          <TextField
            id="password"
            label="Password"
            margin="normal"
            color="secondary"
            type="password"
            placeholder="Enter Your Password"
            fullWidth={true}
            value={password}
            onChange={e => passwordSet(e.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            margin="normal"
            color="secondary"
            type="text"
            placeholder="Enter Your Email"
            fullWidth={true}
            value={email}
            onChange={e => emailSet(e.target.value)}
          />
          <TextField
            id="cell"
            label="Cell"
            margin="normal"
            color="secondary"
            type="text"
            placeholder="Enter Your Cell"
            fullWidth={true}
            value={cell}
            onChange={e => cellSet(e.target.value)}
          />
          <TextField
            id="city"
            label="City"
            margin="normal"
            color="secondary"
            type="text"
            placeholder="Enter Your City"
            fullWidth={true}
            value={city}
            onChange={e => citySet(e.target.value)}
          />
          <TextField
            id="country"
            label="Country"
            margin="normal"
            color="secondary"
            type="text"
            placeholder="Enter Your Country"
            fullWidth={true}
            value={country}
            onChange={e => countrySet(e.target.value)}
          />
          <Button variant="contained" color="secondary" type="submit" onClick={() => signUp()}>Signup</Button>
        </div>
      </main>
      <footer>
        <LoginFooter />
      </footer>
    </div>
  );
}
export default Signup;
