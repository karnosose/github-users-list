import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import {styles} from './UsersList.style';

class User extends Component {

  render() {
    const {id, login, avatar, githubUrl} = this.props;

    return (
      <div>
        
      </div>
    )
  }
}

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
        {errorMessage ? (
          <p>f{errorMessage}</p>
         ) : isEmpty ? (
           <p>No Data</p>
         ) : isLoading ? (
           <p>...</p>
         ) : (
           users.map((user, id) => (
           <div>
             <User 
              id={user.id}
              login={user.login}
              avatar={user.avatar_url}
              githubUrl={user.html_url}
             />
           </div>
           
           ))
         )
        }
      </Container>
    );
  }
}

export default withStyles(styles)(UsersList);
