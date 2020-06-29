import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import {styles} from './UserForm.style';
import { withStyles } from '@material-ui/styles';


class UserForm extends Component {

  
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserForm);
