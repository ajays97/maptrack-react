import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import heroImage from '../../assets/hero.png';

import { logout, login } from '../../actions/auth';

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
    

  constructor(props) {
    super(props);

    this.props.dispatch(logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
        dispatch(login(username, password));
    }
  }

  render() {
    const { classes } = this.props;

    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    
    return (


      <div className="page">
        <div className="hero">
          <img src={heroImage} />
          <h1 className="quote">A fast, flexible IoT location service that makes it quick and easy to add location awareness to your products.</h1>
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
              <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Username</InputLabel>
                  <Input id="email" name="username" value={username} onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input name="password" type="password" id="password" value={password} onChange={this.handleChange} />
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

function mapStateToProps(state) {
  console.log(state.authentication);
  console.log(this.state)
  const { loggingIn } = state.authentication;
  
  return {
      loggingIn
  };
}

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));