import React, { Component } from "react";

import PropTypes from 'prop-types';

import './AppNav.css';
import notificationLogo from '../../assets/notification.svg';
import userImage from '../../assets/user_1.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppNav extends Component {

  
    render() {
      
      return (
        <div className="header">
          <h6>MAPTRACK</h6>

          {/* <img className="notification" src="./././assets/notification.svg" alt="notification" /> */}
          <div className="header-right">
            <img src={notificationLogo} alt="notification" className="notification"/>
            <img src={userImage} alt="user" className="user"/>
          </div>
        </div>

      );
    }
}

export default AppNav;