import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

class Headermenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      headerMenu: false,
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.menuClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.menuClickOutside, true);
  }

  menuClickOutside = event => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target)) {
      this.setState({
        headerMenu: false
      });
    }
  }

  headerMenuOpen(headerMenuType) {
    if (this.state.headerMenu === headerMenuType) {
      this.setState({ headerMenu: null })
    }
    else {
      this.setState({ headerMenu: headerMenuType })
    }
  }

  render() {
    return (
      <div className="headerMenuMain">
        <div onClick={() => this.headerMenuOpen("menuList1")} className="headerMenu"><span>8</span>
          <i><NotificationsActiveOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList1' ?
          <div className="headerMenuDetailBox">
            <h1>Notifications</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                <li><a href="#_">Notifications 1</a></li>
                <li><a href="#_">Notifications 2</a></li>
                <li><a href="#_">Notifications 3</a></li>
                <li><a href="#_">Notifications 4</a></li>
                <li><a href="#_">Notifications 5</a></li>
                <li><a href="#_">Notifications 6</a></li>
                <li><a href="#_">Notifications 7</a></li>
                <li><a href="#_">Notifications 8</a></li>
                <li><a href="#_">Notifications 9</a></li>
                <li><a href="#_">Notifications 10</a></li>
                <li><a href="#_">Notifications 11</a></li>
                <li><a href="#_">Notifications 12</a></li>
              </ul>
            </Scrollbars>
          </div>
          : null}
        <div onClick={() => this.headerMenuOpen("menuList2")} className="headerMenu"><span>15</span>
          <i><MarkEmailReadOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList2' ?
          <div className="headerMenuDetailBox">
            <h1>Messages</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                <li><a href="#_">Messages 1</a></li>
                <li><a href="#_">Messages 2</a></li>
                <li><a href="#_">Messages 3</a></li>
                <li><a href="#_">Messages 4</a></li>
                <li><a href="#_">Messages 5</a></li>
                <li><a href="#_">Messages 6</a></li>
                <li><a href="#_">Messages 7</a></li>
                <li><a href="#_">Messages 8</a></li>
                <li><a href="#_">Messages 9</a></li>
                <li><a href="#_">Messages 10</a></li>
                <li><a href="#_">Messages 11</a></li>
                <li><a href="#_">Messages 12</a></li>
              </ul>
            </Scrollbars>
          </div>
          : null}
        <div onClick={() => this.headerMenuOpen("menuList3")} className="headerMenu"><span>6</span>
          <i><DateRangeOutlinedIcon fontSize="small" /></i></div>
        {this.state.headerMenu === 'menuList3' ?
          <div className="headerMenuDetailBox">
            <h1>Tasks</h1>
            <Scrollbars style={{ height: 300 }}>
              <ul>
                <li><a href="#_">Tasks 1</a></li>
                <li><a href="#_">Tasks 2</a></li>
                <li><a href="#_">Tasks 3</a></li>
                <li><a href="#_">Tasks 4</a></li>
                <li><a href="#_">Tasks 5</a></li>
                <li><a href="#_">Tasks 6</a></li>
                <li><a href="#_">Tasks 7</a></li>
                <li><a href="#_">Tasks 8</a></li>
                <li><a href="#_">Tasks 9</a></li>
                <li><a href="#_">Tasks 10</a></li>
                <li><a href="#_">Tasks 11</a></li>
                <li><a href="#_">Tasks 12</a></li>
              </ul>
            </Scrollbars>
          </div>
          : null}
      </div>
    );
  }
}

export default Headermenu;



