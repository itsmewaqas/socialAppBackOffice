import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import MUIDataTable from "mui-datatables";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
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
import Usersdata from "../sharedcomponent/Usersdata";

function Users(props) {

  const postData = props.location.state;
  console.log(postData);


  useEffect(() => {
  }, []);


  let history = useHistory();

  function viewUserDetail(rowIndex) {
    history.push(
      { pathname: '/Users/UsersDetail', state: rowIndex }
    )
  }

  const columns = [
    {
      name: 'userName',
      label: 'userName',
    },
    {
      name: 'userEmail',
      label: 'userEmail',
    },
    {
      name: 'userStatus',
      label: 'userStatus',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div>{value == 'Active' ?
            <p style={{ color: 'green' }}>{value}</p>
            :
            <p style={{ color: 'red' }}>{value}</p>
          }</div>;
        }

      }
    },
    {
      name: 'userGender',
      label: 'userGender',
    },
    {
      name: 'userPhone',
      label: 'userPhone',
    },
    {
      name: 'userPassword',
      label: 'userPassword',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userZipcode',
      label: 'userZipcode',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userCountry',
      label: 'userCountry',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userState',
      label: 'userState',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userCity',
      label: 'userCity',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userSignupDate',
      label: 'userSignupDate',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'userType',
      label: 'userType ',
      options: {
        display: ('excluded'),
        customBodyRender: (value, tableMeta, updateValue) => (
          <p>{value.join(", ")}</p>
        )
      }
    },
    {
      name: 'View',
      label: 'View ',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <a className='tableBtn' onClick={() => viewUserDetail(tableMeta.rowIndex)}><RemoveRedEyeOutlinedIcon /></a>
          </div>
        )
      }
    },
  ];

  const options = {
    //filterType: 'checkbox',
    selectableRows: false,
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <MUIDataTable
            title={"Users List"}
            data={Usersdata}
            rowHover={true}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Users;
