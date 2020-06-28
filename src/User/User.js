import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import {styles} from './User.style';
import { withStyles } from '@material-ui/styles';


class User extends Component {

  render() {
    const {id, login, avatar, githubUrl} = this.props;
    const { classes } = this.props;

    return (
        <Grid item xs={6} sm={3}>


        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="avatar"
            image={avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {login}
            </Typography>
            <Link href={githubUrl} target='_blank' color="inherit">
                View github account
            </Link>
          </CardContent>
          <CardActions>
        </CardActions>
        </CardActionArea>
        
      </Card>
      </Grid>
    )
  }
}

export default withStyles(styles)(User);
