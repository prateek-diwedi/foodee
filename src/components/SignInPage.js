import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Footer from "../components/Footer";
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const axios = require("axios");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Foodee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/user/brookelark)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class SignIpPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: ''
    }

  }
  componentWillMount() {
    // return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    const { username, email, password } = this.state
    let user = {
      username: username,
      email: email,
      password: password
    };
    axios
      .post("https://foodee-api.herokuapp.com/login", { user },
        { withCredentials: true })
      .then(response => {
        // console.log("logged in user ---->>> for id", response.data.user.id)
        Cookies.set('name', user.username, { expires: 7 });
        Cookies.set('id', response.data.user.id)
        let loggedInUser = Cookies.get('name')
        let loggedUserId = Cookies.get('id')
        console.log("cookie-->", loggedUserId)
        Cookies.set('email', user.email, {expires: 7 })
        console.log("cookie-->", user.email)
        console.log("cookie-->", loggedInUser)
        if (response.data.logged_in) {
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };
  redirect = () => {
    this.props.history.push('/')
  }
  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })
          }
        </ul>
      </div>
    )
  }
  render() {
    const { classes } = this.props;

    const { username, email, password } = this.state


    return (
      <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
            </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={event => this.handleSubmit(event)}
              >
                <TextField
                  onChange={this.handleChange}
                  value={username}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  onChange={this.handleChange}
                  value={email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  onChange={this.handleChange}
                  value={password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
              </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                  </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
              <div>
                {
                  this.state.errors ? this.handleErrors() : null
                }
              </div>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}
SignIpPage.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(SignIpPage);
