import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import EditableUser from '../EditableUser/EditableUser'

import {styles} from './UsersList.style';
import { withStyles } from '@material-ui/styles';


class UsersList extends Component {

  state = {
    isLoading: true,
    isEmpty: false,
    errorMessage: '',
    users: []
  }

  componentDidMount() {
    this.fetchGithubUsersList();
  }

  fetchGithubUsersList = () => {
    fetch('https://api.github.com/users')
    .then(res => {
      if (res.status === 404) {
        throw new Error("No Data");
      }
      return res;
    })
    .then(users => users.json())
    .then(users => {
      this.setState({
        users: users,
        isEmpty: users.length === 0,
        isLoading: false,
        errorMessage: '',
      })
    })
    .catch(err =>
      this.setState({
        isLoading: false,
        errorMessage: err.message,
        users: []
      })
    );
  }


  render() {
    console.log(this.state)

    const {isEmpty, isLoading, errorMessage, users} = this.state;
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.pageTitle}>
          Github users list
        </Typography>
        <Grid container spacing={6}>

        {errorMessage ? (
          <p>f{errorMessage}</p>
         ) : isEmpty ? (
           <p>No Data</p>
         ) : isLoading ? (
           <p>...</p>
         ) : (

           users.map((user, id) => (
             <EditableUser
              key={uuid()} 
              id={user.id}
              login={user.login}
              avatar={user.avatar_url}
              githubUrl={user.html_url}
             />           
           ))
         )

        }
        </Grid>

      </Container>
    );
  }
}

UsersList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UsersList);
