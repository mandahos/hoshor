import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { maxWidth } from '@material-ui/system';

import med-planner.jpg from "../../assets/images/med-planner.jpg";

const useStyles = makeStyles({
  root: {
  maxWidth: 200,
  },
  media: {
    height: 140,
  },

})

export default function Portfolio() {
  const classes = useStyles();
  return(
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image="{med-planner}" title="">
          <CardContent>
            1
          </CardContent>

        </CardMedia>
      </CardActionArea>
    </Card>
  )
}
