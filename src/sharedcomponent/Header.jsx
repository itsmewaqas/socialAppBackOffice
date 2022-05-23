import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import drawerIcon from '../assets/images/menu.png';
import ncrLogo from '../assets/images/logo.png';
import Headermenu from '../sharedcomponent/Headermenu';

function Header(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const [menuCollapse, menuCollapseSet] = useState(false);
  const [logoCtrl, logoCtrlSet] = useState('logoArea');
  var [date, setDate] = useState(new Date()); 

  const menuCollapsed = () => {
    menuCollapseSet({ menuCollapse: !menuCollapse });
    logoCtrlSet(logoCtrl == 'logoArea' ? 'logoAreaCollapse' : 'logoArea');
    props.sidebarCtrlFunc();
  }

  let history = useHistory();

  function logout() { 
    history.push('/Login');
    localStorage.clear();
  }

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  });

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy; 

  return (
    <div className="dashHeader">
      <div className={logoCtrl}>
        <a className="logo"><img src={ncrLogo} /></a>
      </div>
      <a className="drawerIcon" onClick={() => menuCollapsed()}><img src={drawerIcon} /></a>
      <a onClick={() => logout()} className="logout"><ExitToAppIcon fontSize="small" /></a>
      <Headermenu />
      <p className='dateTiemCtrl'>{localStorage.getItem("username")} Login Time : <span>{today}</span> : <span>{date.toLocaleTimeString()}</span></p>
    </div>
  );
}

export default Header;