import React, { useState } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Contentbox from '../sharedcomponent/Contentbox';
import MUIDataTable from "mui-datatables";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { color, style } from '@mui/system';
var faker = require('faker');
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function Dashboard(props) {

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(97, 22, 53, 0.6)',
          'rgba(34, 34, 34, 0.6)',
          'rgba(82, 136, 47, 0.6)',
          'rgba(36, 44, 121, 0.6)',
          'rgba(244, 103, 48, 0.6)',
          'rgba(139, 9, 172, 0.6)',
        ],
        borderColor: [
          'rgba(97, 22, 53, 0.2)',
          'rgba(34, 34, 34,  0.2)',
          'rgba(82, 136, 47,  0.2)',
          'rgba(36, 44, 121,  0.2)',
          'rgba(244, 103, 48,  0.2)',
          'rgba(139, 9, 172,  0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const donughtOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    radius: "90%",
    plugins: {
      legend: {
        position: 'right',
      },
    },
  }

  const [scoreData, scoreDataSet] = useState([
    {
      "id": 1,
      "sTitle": `Total Users`,
      "sScore": '25%',
      "sIcon": <GroupAddOutlinedIcon style={{ fontSize: '30px' }} />,
    },
    {
      "id": 2,
      "sTitle": 'Active Users',
      "sScore": '35%',
      "sIcon": <PersonOutlineOutlinedIcon style={{ fontSize: '30px' }} />,
    },
    {
      "id": 3,
      "sTitle": 'Inactive Users',
      "sScore": '45%',
      "sIcon": <PersonOffOutlinedIcon style={{ fontSize: '30px' }} />,
    },
    {
      "id": 4,
      "sTitle": 'Online Users',
      "sScore": '55%',
      "sIcon": <GroupOutlinedIcon style={{ fontSize: '30px' }} />,
    }
  ]);


  const [userData, userDataSet] = useState([
    { id: 1, uName: "hamza khalid", uEmail: "hamza.khalid@gmail.com", uLoginTime: '2/10/2020 5:00:55 AM', status: 'active' },
    { id: 2, uName: "waseem khan", uEmail: "waseem.khan@gmail.com", uLoginTime: '2/25/2020 2:05:32 PM', status: 'inactive' },
    { id: 3, uName: "muhammad waqas", uEmail: "muhammad.waqas@gmail.com", uLoginTime: '1/2/2020 11:42:00 AM', status: 'active' },
    { id: 4, uName: "fahad ali", uEmail: "fahad.ali@gmail.com", uLoginTime: '2/3/2020 11:43:12 PM', status: 'inactive' },
    { id: 5, uName: "ali khan", uEmail: "ali.khan@gmail.com", uLoginTime: '1/1/2020 7:23:54 PM', status: 'active' }
  ]);


  const columns = [
    {
      name: 'id',
      label: 'ID',
    },
    {
      name: 'uName',
      label: 'Name',
    },
    {
      name: 'uEmail',
      label: 'Email',
    },
    {
      name: 'uLoginTime',
      label: 'Login Time',
    },
    {
      name: 'status',
      label: 'Status',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <div>{value == 'active' ?
            <p style={{ color: 'green' }}>{value}</p>
            :
            <p style={{ color: 'red' }}>{value}</p>
          }</div>;
        }

      }
    },
    {
      name: 'actions',
      label: 'Actions',
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <div>
            <a href='#_' onClick={() => selectItem(tableMeta.rowData)}><RemoveRedEyeOutlinedIcon color="secondary" fontSize="small" /></a>&nbsp;
            <a href='#_' onClick={() => removeItem(tableMeta.rowIndex)}><DeleteOutlineOutlinedIcon color="secondary" fontSize="small" /></a>
          </div>
        )

      }
    },
  ];
  const options = {
    //filterType: 'checkbox',
    selectableRows: false,
  };

  function selectItem(item) {
    console.log(item, 'select item');
  }

  const removeItem = (rowIndex) => {
    console.log(rowIndex, 'delete item');
    var delItem = userData;
    delItem.splice(rowIndex, 1);
    userDataSet([...delItem]);
  }

  return (
    <div>
      <Grid container spacing={3}>
        {scoreData.map((item, index) => (
          <Grid item lg={3} md={3} sm={6} xs={12} key={index.toString()}>
            <div className="scoreBox clearfix">
              <i>{item.sIcon}</i>
              <h1>{item.sScore}</h1>
              <h2>{item.sTitle}</h2>
            </div>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Contentbox Title='Users Status' subTitle='All Users Status Show In This Chart'>
            <div style={{ height: 'auto', minHeight: '300px', width: '100%' }}>
              <Doughnut data={doughnutData} options={donughtOptions} height={60} />
            </div>
          </Contentbox>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <MUIDataTable
            title={"Last Active Inactive Users List"}
            data={userData}
            rowHover={true}
            columns={columns}
            options={options}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
