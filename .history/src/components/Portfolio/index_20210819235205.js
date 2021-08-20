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

const useStyles = makeStyles({
  root: {
  maxWidth: 345,
  },
  media: {
    height: 140,
  },

})

export default function Portfolio() {
  return(
    <Card>
      <CardActionArea>
        <CardMedia className={classes.root} image="" title="">
          <CardContent>
            1
          </CardContent>

        </CardMedia>
      </CardActionArea>
    </Card>
  )
}
