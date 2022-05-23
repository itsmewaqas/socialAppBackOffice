import React, { useState, useEffect } from 'react';
import PaletteIcon from '@mui/icons-material/Palette';
import { color } from '@mui/system';
import { Switch, Route } from 'react-router-dom';
import Header from '../sharedcomponent/Header';
import Sidebar from '../sharedcomponent/Sidebar';
import Footer from '../sharedcomponent/Footer';
import Dashboard from './Dashboard';
import Users from './Users';
import UsersDetail from './UsersDetail';
import Post from './Post';
import PostDetail from './PostDetail';
import Banners from './Banners';
import Reportedpost from './Reportedpost';
import ReportedpostDetail from './ReportedpostDetail';
import Communication from './Communication';
import Createadmin from './Createadmin';
import NoMatch from '../sharedcomponent/NoMatch';

function Inneradmin(props) {

  const [count, setCount] = useState(0);
  const [sidebarCtrl, sidebarCtrlSet] = useState("dashSitebar");
  const [titleCtrl, titleCtrlSet] = useState("titleShow");
  const [dashboardContainer, dashboardContainerSet] = useState("dashContainer");
  const [isHoverMenu, isHoverMenuSet] = useState(false);

  const sidebarCtrlFunc = () => {
    isHoverMenuSet(!isHoverMenu);
    sidebarCtrlSet(sidebarCtrl == 'dashSitebar' ? 'dashSitebarCollaps' : 'dashSitebar');
    titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
    dashboardContainerSet(dashboardContainer == 'dashContainer' ? 'dashContainerCollaps' : 'dashContainer');
  }

  useEffect(() => {

    if (window.innerWidth > 767) {
      isHoverMenuSet(false);
    } else {
      isHoverMenuSet(true);
    }

  }, [])

  function hoverPanel() {
    if (sidebarCtrl == 'dashSitebar') {
      sidebarCtrlSet(sidebarCtrl == 'dashSitebar' ? 'dashSitebar' : 'dashSitebar');
      titleCtrlSet(titleCtrl == 'titleShow' ? 'titleShow' : 'titleShow');
      dashboardContainerSet(dashboardContainer == 'dashContainer' ? 'dashContainer' : 'dashContainer');
    }
    else if (sidebarCtrl == 'dashSitebarCollaps') {
      sidebarCtrlSet(sidebarCtrl == 'dashSitebarCollaps' ? 'dashSitebar' : 'dashSitebarCollaps');
      titleCtrlSet(titleCtrl == 'titleHide' ? 'titleShow' : 'titleHide');
      dashboardContainerSet(dashboardContainer == 'dashContainerCollaps' ? 'dashContainer' : 'dashContainerCollaps');
    }
    console.log('inter call');
  }

  function closePanel() {
    if (sidebarCtrl == 'dashSitebarCollaps') {
      sidebarCtrlSet(sidebarCtrl == 'dashSitebar' ? 'dashSitebar' : 'dashSitebar');
      titleCtrlSet(titleCtrl == 'titleShow' ? 'titleShow' : 'titleShow');
      dashboardContainerSet(dashboardContainer == 'dashContainer' ? 'dashContainer' : 'dashContainer');
    }
    else if (sidebarCtrl == 'dashSitebar') {
      sidebarCtrlSet(sidebarCtrl == 'dashSitebarCollaps' ? 'dashSitebar' : 'dashSitebarCollaps');
      titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
      dashboardContainerSet(dashboardContainer == 'dashContainer' ? 'dashContainerCollaps' : 'dashContainer');
    }
    console.log('leave call');
  }

  const menuHoverState = isHoverMenu ? {
    hoverOpen: hoverPanel,
    hoverClose: closePanel
  } : {}

  return (
    <div>
      <Header
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} />
      <Sidebar
        sidebarCtrl={sidebarCtrl}
        titleCtrl={titleCtrl}
        menuOptions={menuHoverState}
      />
      <div className={dashboardContainer}>
        <div className="dashContainerInner">
          <Switch> 
            <Route path={`/Dashboard`} exact component={Dashboard} />
            <Route path={`/Users`} exact component={Users} />
            <Route path={`/Users/UsersDetail`} exact component={UsersDetail} />
            <Route path={`/Post`} exact component={Post} />
            <Route path={`/Post/PostDetail`} exact component={PostDetail} />
            <Route path={`/Banners`} component={Banners} />
            <Route path={`/Reportedpost`} exact component={Reportedpost} />
            <Route path={`/Reportedpost/ReportedpostDetail`} component={ReportedpostDetail} />
            <Route path={`/Communication`} component={Communication} />
            <Route path={`/Createadmin`} component={Createadmin} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inneradmin;


