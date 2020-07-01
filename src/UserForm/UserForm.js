import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import {styles} from './UserForm.style';
import { withStyles } from '@material-ui/styles';


class UserForm extends Component {
  state = {
    userName: this.props.userName || '',
    githubUrl: this.props.githubUrl || '',
  };

  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleGithubUrlChange = (e) => {
    this.setState({ githubUrl: e.target.value });
  };

  handleFormSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      userName: this.state.userName,
      githubUrl: this.state.githubUrl,
    });
  }

  render() {
    const {avatar, classes, onFormClose} = this.props;

    return (
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
          <CardHeader>
          <CardMedia
            className={classes.avatar}
            component="img"
            alt="avatar"
            image={avatar}
          />
          <CardContent className={classes.userForm}>
            <form noValidate autoComplete="off">
              <TextField 
                margin='dense'
                value={this.state.userName} 
                id="outlined-basic" 
                label="username" 
                variant="outlined" 
                onChange={this.handleUserNameChange}
              />
               <TextField 
                margin='dense'
                value={this.state.githubUrl} 
                id="outlined-basic" 
                label="githubUrl" 
                variant="outlined" 
                onChange={this.handleGithubUrlChange}
              />
            </form>
          </CardContent>
          </CardHeader>
          <CardActions className={classes.actions}>
            <Button 
              variant="contained" 
              color="default"
              onClick={this.handleFormSubmit}
            >
              Update
            </Button>
            <Button 
              variant="contained" 
              color="default"
              onClick={onFormClose}
            >
              Cancel
            </Button>
          </CardActions>
      </Card>
    </Grid>
    )
  }
}

UserForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserForm);
