import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


import {styles} from './User.style';
import { withStyles } from '@material-ui/styles';


class User extends Component {

  render() {
    const {login, avatar, githubUrl, classes} = this.props;

    return (
      <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.avatar}
            component="img"
            alt="avatar"
            image={avatar}
          />
          <CardContent>
            <Typography 
              gutterBottom
              variant="h5" 
              component="h2"
              className={classes.login}
            >
              {login}
            </Typography>
            <Link 
              class={classes.githubUrl}
              href={githubUrl} 
              target='_blank' 
              color="inherit"
              rel="noreferrer"
            >
              View github account
            </Link>
          </CardContent>
          <CardActions className={classes.actions}>
            <Tooltip title="Edit user">
              <EditIcon className={classes.editUser} />
            </Tooltip>
            <Tooltip title="Delete user">
              <DeleteIcon className={classes.deleteUser} />
            </Tooltip>
          </CardActions>
        </CardActionArea>
        
      </Card>
    </Grid>
    )
  }
}

export default withStyles(styles)(User);
