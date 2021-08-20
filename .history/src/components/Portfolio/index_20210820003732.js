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
  const data = [
    {title: Med-Planner},
    {},
    {},
    {},
    {},
    {},

  ]
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"

      >
        {data.map(elem => (
          <Grid item xs={8} sm={6} md={4} key={data.indexOf(elem)}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image="./img/med-planner.jpg" title="" />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="h2">`${elem.title}`</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="default" href="https://github.com/mandahos/med-planner">
                  Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </div>






  )
}
