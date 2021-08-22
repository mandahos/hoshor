import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CSS from './footer.css'

const useStyles = makeStyles({
  root: {
    width: 500,
    position: 'absolute'
  },
});

export default function LabelBottomNavigation() {
  const footer = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={footer}>
      <BottomNavigationAction a href="https://github.com/mandahos" label="GitHub" value="recents" icon={<GitHubIcon />} />
      <BottomNavigationAction a href="https://www.linkedin.com/in/amanda-hoshor/" label="LinkedIn" value="favorites" icon={<LinkedInIcon />} />
      <BottomNavigationAction a href="mailto:hoshor.manda@gmail.com" label="Email" value="nearby" icon={<AlternateEmailIcon />} />
     
    </BottomNavigation>
  );
}