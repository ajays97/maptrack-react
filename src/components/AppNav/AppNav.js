import React, { Component } from "react";

import './AppNav.css';
import notificationLogo from '../../assets/notification.svg';
import userImage from '../../assets/user_1.svg';

class AppNav extends Component {

  
    render() {
      
      return (
        <div className="header">
        
          <div>
            <h6>MAPTRACK</h6>
          </div>

          {/* <img className="notification" src="./././assets/notification.svg" alt="notification" /> */}
          <div className="header-right">
            <img src={notificationLogo} alt="notification" className="notification"/>
            <img src={userImage} alt="user" className="notification"/>
          </div>
        </div>

      );
    }
}

export default AppNav;