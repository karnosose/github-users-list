import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import User from './User/User';
import UserForm from './UserForm/UserForm'

class EditableUser extends Component {
  state = {
      editFormOpen: false,
  };

  handleEdit = () => {
    this.setState({editFormOpen: true})
  }

  handleFormClose = () => {
    this.setState({ editFormOpen: false });
  };

  handleSubmit = (user) => {
    this.props.onFormSubmit(user);
    this.setState({ editFormOpen: false });
  };

  handleUserDelete = (user) => {
    this.props.deleteUser(user);
  }

  render() {

    const {id, userName, avatar, githubUrl} = this.props

    if (this.state.editFormOpen) {
      return (
        <UserForm
          key={uuid()} 
          id={id}
          userName={userName}
          avatar={avatar}
          githubUrl={githubUrl}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <User
          key={uuid()} 
          id={id}
          userName={userName}
          avatar={avatar}
          githubUrl={githubUrl}
          onEditClick={this.handleEdit}
          onDeleteClick={this.handleUserDelete}
        />
      );
    }
  }
}
  
EditableUser.propTypes = {
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired, 
};

export default EditableUser;
