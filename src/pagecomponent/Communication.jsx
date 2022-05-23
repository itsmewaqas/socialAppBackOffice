import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useRouteMatch,
  Redirect,
  withRouter
} from "react-router-dom";

import Email from '../pagecomponent/Email';
import Message from '../pagecomponent/Message';
import Pushnotification from '../pagecomponent/Pushnotification';

function Communication(props) {

  const [activeMenu, activeMenuSet] = useState('Email');
  
  let { url } = useRouteMatch();

  useEffect(() => {
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Router>
            <ul className='settingMenu'>
              <li><Link className={activeMenu == 'Email' ? 'active' : ''} onClick={() => activeMenuSet("Email")} to={`${url}`}>Email</Link> </li>
              <li><Link className={activeMenu == 'Message' ? 'active' : ''} onClick={() => activeMenuSet("Message")} to={`${url}/Message`}> Message</Link></li>
              <li><Link className={activeMenu == 'Pushnotification' ? 'active' : ''} onClick={() => activeMenuSet("Pushnotification")} to={`${url}/Pushnotification`}>Push Notification</Link> </li>
            </ul>
            <Switch>
              <Route exact path={`${url}`} component={Email} />
              <Route path={`${url}/Message`} component={Message} />
              <Route path={`${url}/Pushnotification`} component={Pushnotification} />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </div >
  );
}

export default Communication;


























