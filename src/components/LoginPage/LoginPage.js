import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import heroImage from '../../assets/mining.jpeg';

import './LoginPage.css';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 12,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'none',
    background: '#fbfbfb',
    // alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  title: {
    color: '#221f52',
    display: 'flex',
    flex: 1,
    fontSize: 1 + 'em',
    alignItems: 'center',
    fontWeight: 'bold',
    fontFamily: "Prompt",
    marginBottom: 2 + 'em',
  },
  // avatar: {
  //   margin: theme.spacing.unit,
  //   backgroundColor: theme.palette.secondary.main,
  // },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginPage extends Component {
    
  render() {
  const { classes } = this.props;
  return (


    <div className="page">
      <div className="hero">
        <img src={heroImage} />
      </div>
      <div className="main">
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}

            <h1>MAPTRACK</h1>
            
            <Typography component="h1" variant="h5" className={classes.title}>
              Login to your account
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Username</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                LOGIN
              </Button>
            </form>
          </Paper>
        </main>
      </div>
    </div>


    
  );
  }
  
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginPage);