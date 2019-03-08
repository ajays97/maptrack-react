import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { checkToken } from '../actions/auth';
import {connect} from 'react-redux'

/**
 * Middleware to protect routes from unauthorized access
 * @param {*} ComponentToProtect 
 */
const withAuth = (ComponentToProtect) => {
  return class extends Component {
    
    constructor(props) {
      super(props);

      const { dispatch } = this.props;
      dispatch(checkToken());
    }

    componentDidMount() {      
      
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state = {}) => {
    return {...state};
};

export default connect(mapStateToProps)(withAuth);