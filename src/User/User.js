import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import {styles} from './User.style';

class User extends Component {

  render() {
    const {id, login, avatar, githubUrl} = this.props;

    return (
      <div>
        
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
        <div></div>
    )
  }
}

export default withStyles(styles)(User);
