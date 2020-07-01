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
   const users = await this.getUsers();
   console.log('dd', users);
    
    this.setState({
      users: users,
      isEmpty: users.length === 0,
      isLoading: false,
      errorMessage: '',
    })
    

  }

   async fetchGithubUsersList() {
    const usersList = await fetch('https://api.github.com/users')
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
          userName: user.login,
          githubUrl: user.html_url,
          avatar: user.avatar_url,
        }
      })
      return users
    })    
    .catch(err =>
      this.setState({
        isLoading: false,
        errorMessage: err.message,
        users: []
      })
    );

    return usersList;
  }

  async getUsers () {
    let users = localStorage.getItem('users');

    if(users) {
      users = JSON.parse(localStorage.getItem('users'));

    } else {
      users = await this.fetchGithubUsersList()
      localStorage.setItem(('users'), JSON.stringify(users));
    }
    
    return users;
  }

  handleFormSubmit = (attrs) => {
    
    this.setState({
      users: this.state.users.map((user) => {
        if (user.id === attrs.id) {
          return Object.assign({}, user, {
            userName: attrs.userName,
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
    console.log(10,users)
    return (
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" className={classes.pageTitle}>
          Github users list
        </Typography>
        <Grid container spacing={6}>

        {errorMessage ? (
          <p>{errorMessage}</p>
         ) : isEmpty ? (
           <p>No Data</p>
         ) : isLoading ? (
          <div className={classes.loading}>
            {/* <CircularProgress /> */}
            ...
          </div>
         ) : (

          users.map((user, id) => (
            <EditableUser
              key={uuid()} 
              id={user.id}
              userName={user.userName}
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
