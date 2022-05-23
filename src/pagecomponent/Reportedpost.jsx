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
import PostData from "../sharedcomponent/Postdata";
import img from "../assets/images/profile.jpg";

function Reportedpost(props) {

  useEffect(() => { 
  }, []); 


  let history = useHistory();

  function viewPostDetail(rowIndex) {
    history.push(
      { pathname: '/Reportedpost/ReportedpostDetail', state: rowIndex }
    )
  }

  const columns = [
    {
      name: 'postCreatorName',
      label: 'postCreatorName',
    },
    {
      name: 'postDesc',
      label: 'postDesc',
    },
    {
      name: 'postPhoto',
      label: 'postPhoto',
      options: {
        display: ('excluded'),
      },
    },
    {
      name: 'postDate',
      label: 'postDate',
    },
    {
      name: 'userId',
      label: 'userId',
    },
    {
      name: 'like',
      label: 'like',
    },
    {
      name: 'View',
      label: 'View ',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <a className='tableBtn' onClick={() => viewPostDetail(tableMeta.rowIndex)}><RemoveRedEyeOutlinedIcon /></a>
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
            title={"Reported Post List"}
            data={PostData}
            rowHover={true}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reportedpost;
