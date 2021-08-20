import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  root: {
    margin: 15,
    maxWidth: 200,
  },
  media: {
    height: 200,
  },

})

export default function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        spacing={5}
        direction="row"
        justify="flex-start"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image="./img/med-planner.jpg" title="" />
            <CardContent>
              <Typography gutterBottom variant="h10" component="h2">Med-Planner</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="default" href="https://github.com/mandahos/med-planner">
              Go
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>






  )
}
