import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import '../src/assets/dependencies.jsx';
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Login from './pagecomponent/Login';
import Signup from './pagecomponent/Signup';
import Inneradmin from './pagecomponent/Inneradmin';
import Protected from './Protected';

function App(props) {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/">
              <Protected CMP={Inneradmin} />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;


