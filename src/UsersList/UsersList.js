import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import CircularProgress from '@material-ui/core/CircularProgress';
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

  async componentDidMount() {

    this.fetchGithubUsersList();
  //  const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : await this.fetchGithubUsersList();
  //   this.setState({
  //     users: users,
  //     isEmpty: users.length === 0,
  //     isLoading: false,
  //     errorMessage: '',
  //   })
    

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
      users = users.map(user => {
        return  {
          id: user.id,
          login: user.login,
          githubUrl: user.html_url,
          avatar: user.avatar_url,
        }
      })
      return users
    })
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

  handleFormSubmit = (attrs) => {
    
    this.setState({
      users: this.state.users.map((user) => {
        if (user.id === attrs.id) {
          return Object.assign({}, user, {
            login: attrs.login,
            githubUrl: attrs.githubUrl,
          });
        } else {
          return user;
        }
      }),
    });
  };

  deleteUser = (userId) => {
    const newUsers = this.state.users.filter(user => user.id !== userId);
    this.setState({
      ...this.state,
      users: newUsers,
    })
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
          <div className={classes.loading}>
            <CircularProgress />
          </div>
         ) : (

          users.map((user, id) => (
            <EditableUser
              key={uuid()} 
              id={user.id}
              login={user.login}
              avatar={user.avatar}
              githubUrl={user.githubUrl}
              onFormSubmit={this.handleFormSubmit}
              deleteUser={this.deleteUser}

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
