import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import meImage from '../../assets/images/react-profile.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 900,
    },
    media: {
      height: 500,
    },
  });


function Me() {

    const classes = useStyles();

    return (
        <div>
            
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image src={meImage}
              title="Placeholder"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                I am Manda!
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Current student, working towards a certification in full stack web development. 
              </Typography>
            </CardContent>
          </CardActionArea>
      
        </Card>
       
        </div>
      
      );
}

export default Me;