import React, { Component } from "react";

import { connect } from "react-redux";
import AppNav from "../AppNav/AppNav";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Account from "./Account/Account";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    padding: "3em 10em",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },

  indicator: {
    backgroundColor: "green"
  }
});

class DashboardPage extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div>
          <AppNav />
        </div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Account Information" />
              <Tab label="Assets" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Account />
            </TabContainer>
          )}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(DashboardPage)
);
