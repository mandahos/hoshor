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
    {title: 'Med-Planner', image:'./img/med-planner.jpg', glink: 'https://github.com/mandahos/med-planner', plink: 'https://med-planner.herokuapp.com/'},
    {title: 'Busy-Day', image:'', glink: 'https://github.com/mandahos/busy-day', plink: 'https://mandahos.github.io/busy-day/'},
    {title: 'Secret Show', image:'', glink: 'https://github.com/mandahos/secret-show', plink: 'https://dante-poe.github.io/secret-show/'},
    {title: 'OOP project', image:'', glink: 'https://github.com/mandahos/employee-tracker', plink: ''},
    {title: 'Note Taker', image:'', glink: 'https://github.com/mandahos/Note-Taker', plink: 'https://stormy-harbor-19046.herokuapp.com/'},
    {title: '', image:'', glink: '', plink: ''},

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
                <CardMedia className={classes.media} image="{elem.image}" title="" />
                <CardContent>
                  <Typography gutterBottom variant="h10" component="h2">{elem.title}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="default" href={elem.glink}>
                  Go
                </Button>
                <Button size="small" color="default" href={elem.plink}>
                  Source
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid>
    </div>






  )
}
