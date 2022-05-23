import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  Redirect,
  withRouter
} from "react-router-dom";

import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

import { Scrollbars } from 'react-custom-scrollbars';
import { style } from '@mui/system';

function Sidebar(props) {

  const [selectedMenu, selectedMenuSet] = useState('Dashboard');
  const { menuOptions } = props;


  let history = useHistory();

  return (
    <div className={props.sidebarCtrl}
      onMouseEnter={menuOptions.hoverOpen}
      onMouseLeave={menuOptions.hoverClose}>
      <Scrollbars style={{ height: 550 }}>
        <ul className='sideMenu'>
          <li className={selectedMenu == 'Dashboard' ? 'active' : ''} onClick={() => selectedMenuSet("Dashboard")}><a onClick={(e) => { history.push('/Dashboard') }}><GridViewIcon fontSize="medium" /><title className={props.titleCtrl}>Dashboard</title> </a></li>
          <li className={selectedMenu == 'Users' ? 'active' : ''} onClick={() => selectedMenuSet("Users")}><a onClick={(e) => { history.push('/Users') }}><SupervisorAccountOutlinedIcon fontSize="medium" /><title className={props.titleCtrl}>Users</title> </a></li>
          <li className={selectedMenu == 'Post' ? 'active' : ''} onClick={() => selectedMenuSet("Post")}><a onClick={(e) => { history.push('/Post') }}><PostAddIcon fontSize="medium" /><title className={props.titleCtrl}>Post</title> </a></li>
          <li className={selectedMenu == 'Banners' ? 'active' : ''} onClick={() => selectedMenuSet("Banners")}><a onClick={(e) => { history.push('/Banners') }}><ImageOutlinedIcon fontSize="medium" /><title className={props.titleCtrl}>Banners</title> </a></li>
          <li className={selectedMenu == 'Reportedpost' ? 'active' : ''} onClick={() => selectedMenuSet("Reportedpost")}><a onClick={(e) => { history.push('/Reportedpost') }}><ReportGmailerrorredOutlinedIcon fontSize="medium" /><title className={props.titleCtrl}>Reportedpost</title></a></li>
          <li className={selectedMenu == 'Communication' ? 'active' : ''} onClick={() => selectedMenuSet("Communication")}><a onClick={(e) => { history.push('/Communication') }}><SmsOutlinedIcon fontSize="medium" /><title className={props.titleCtrl}>Communication</title></a></li>
          <li className={selectedMenu == 'Createadmin' ? 'active' : ''} onClick={() => selectedMenuSet("Createadmin")}><a onClick={(e) => { history.push('/Createadmin') }}><AdminPanelSettingsOutlinedIcon fontSize="medium" /><title className={props.titleCtrl}>Createadmin</title></a></li>
        </ul>
      </Scrollbars>
    </div>
  );
}

export default Sidebar;


