import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import "./Account.css";

const styles = {};

class Account extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="account">
          <div className="image">
            <img src="images/men1.png" />
          </div>
          <div className="form">
            <div className="left">
              <div>
                <p>Username</p>
                <input type="text" />
              </div>
              <div>
                <p>Password</p>
                <input type="password" />
              </div>
              <div>
                <p>Email</p>
                <input type="text" />
              </div>
              <div style={{ margin: "1em 1.25em" }}>
                <Button type="submit" variant="contained">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  style={{ marginLeft: "1.25em", backgroundColor: "#303f92" }}
                  variant="contained"
                  color="primary"
                  className="button-purple"
                >
                  Save
                </Button>
              </div>
            </div>
            <div className="right">
              <div>
                <p>Full Name</p>
                <input type="text" />
              </div>
              <div>
                <p>Confirm Password</p>
                <input type="password" />
              </div>
              <div>
                <p>Phone</p>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Account);
