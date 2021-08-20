
import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import technical from '../../assets/resume/Amanda_Hoshor_Resume.PDF';
import resume from '../../assets/resume/Resume_Hoshor (1).pdf'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


  




function Resume() {
    const classes = useStyles();
    
    return(
        <Card className={classes.root} variant="outlined" align="center">
      <CardContent>
      <Typography className={classes.title} color="textSecondary" align="center" gutterBottom>
          Technical
        </Typography>
        <a href={technical} download="Resume_Hoshor.pdf" >
            
            <BsDownload className="ml-2"/>
        </a>
        
        <Typography className={classes.title} color="textSecondary" align="center" gutterBottom>
          Standard
        </Typography>
        <a href={resume} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            
            <BsDownload className="ml-2"/>
        </a>
    {/* </div> */}
    </CardContent>
    </Card>
    );
}

export default Resume;

