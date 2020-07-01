import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';

import EditableUser from '../EditableUser'

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
    const newUsers = this.state.users.map(user => {
      if (user.id === attrs.id) {
        user.userName = attrs.userName;
        user.githubUrl = attrs.githubUrl;
      } 
      return user;
    })

    localStorage.setItem('users', JSON.stringify(newUsers))
    this.setState({
      ...this.state,
      users: newUsers
    });
  };

  deleteUser = (userId) => {
    const newUsers = this.state.users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(newUsers));
    this.setState({
      ...this.state,
      users: newUsers,
    })
  };

  async resetUsers () {
    const users = await this.fetchGithubUsersList()
    localStorage.setItem(('users'), JSON.stringify(users));
    this.setState({
      ...this.state,
      users
    })
  }

  render() {

    const {isEmpty, isLoading, errorMessage, users} = this.state;
    const { classes } = this.props;

    return (
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h3" component="h1" className={classes.pageTitle}>
            Github users list
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            className={classes.resetUsers}
            onClick={() => this.resetUsers()}
          >
             Reset users
          </Button>
        </div>
        
        <Grid container spacing={6}>

        {errorMessage ? (
          <div className={classes.noData}>
            {errorMessage}
          </div>
         ) : isEmpty ? (
           <div classname={classes.noData}>
             No data
           </div>
         ) : isLoading ? (
          <div className={classes.loading}>
            <CircularProgress />
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
