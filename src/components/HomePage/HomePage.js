import React, { Component } from 'react';

import { connect } from 'react-redux';

import './HomePage.css';
import AppNav from '../AppNav/AppNav';
import MainMap from '../MainMap/MainMap';

import { getAll } from '../../actions/auth';

class HomePage extends Component {

  componentDidMount() {
    // this.props.dispatch();

    
}
  
  render() {
    return (
      <div>
        <AppNav />
        <MainMap />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
      user,
      users
  };
}
  
export default connect(mapStateToProps)(HomePage);