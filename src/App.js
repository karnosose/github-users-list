import React, { Component } from 'react';
import './App.css';

class UsersList extends Component {

  state = {
    isLoading: false,
    isEmpty: false,
    errorMessage: '',
    users: []
  }

  componentDidMount() {
    this.fetchGithubUsersList();
  }

  fetchGithubUsersList = () => {
    fetch('https://api.github.com/usersjjh')
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
        isEmpty:users.length === 0,
        isLoading: false,
        errorMessage: [],

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
    return (
    <div>{this.state.errorText}</div>
    );
  }
}

export default UsersList;
