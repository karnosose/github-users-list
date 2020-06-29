import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import User from '../User/User';
import UserForm from '../UserForm/UserForm'

import {styles} from './EditableUser.style';
import { withStyles } from '@material-ui/styles';


class EditableUser extends Component {
  state = {
      editFormOpen: false,
  };

  render() {

    const {id, login, avatar, githubUrl} = this.props

    if (this.state.editFormOpen) {
      return (
        <UserForm
          key={uuid()} 
          id={id}
          login={login}
          avatar={avatar}
          githubUrl={githubUrl}
        />
      );
    } else {
      return (
        <User
          key={uuid()} 
          id={id}
          login={login}
          avatar={avatar}
          githubUrl={githubUrl}
        />
      );
    }
  }
}
  
EditableUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditableUser);
