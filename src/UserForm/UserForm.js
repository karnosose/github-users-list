import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

import {styles} from './UserForm.style';
import { withStyles } from '@material-ui/styles';


class UserForm extends Component {

  render() {
    const {login, avatar, githubUrl, classes, onEditClick, onDeleteClick} = this.props;

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
          <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField 
                margin='dense'
                value={login} 
                id="outlined-basic" 
                label="login" 
                variant="outlined" 
                onChange={this.handleLoginChange}
              />
               <TextField 
                margin='dense'
                value={login} 
                id="outlined-basic" 
                label="githubUrl" 
                variant="outlined" 
                onChange={this.handleGithubUrlChange}
              />
            </form>
          </CardContent>
          </CardHeader>
          <CardActions className={classes.actions}>
            <Button variant="contained" color="default">
              Update
            </Button>
            <Button variant="contained" color="default">
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
