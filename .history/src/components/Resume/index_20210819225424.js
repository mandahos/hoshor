import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import technical from '../../assets/resume/Amanda_Hoshor_Resume.PDF';
import resume from '../../assets/resume/Resume_Hoshor (1).pdf'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  
  export default function Resume() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    );
  }



function Resume() {
    return(
        <div className="flex items-center my-64">
        <a href={technical} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            Technical Resume
            <BsDownload className="ml-2"/>
        </a>
        <a href={resume} download="Resume_Hoshor.pdf" className="flex flex-row items-center mx-auto p-4 resume text-2xl rounded-lg">
            Standard Resume
            <BsDownload className="ml-2"/>
        </a>
    </div>
    );
}

