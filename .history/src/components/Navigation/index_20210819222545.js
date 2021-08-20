import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Me from '../Me/index'
import Portfolio from '../Portfolio/index'
import Resume from '../Resume/index'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          
          <Tab label="Me" icon={<FavoriteIcon />} {...a11yProps(0)} />
          <Tab label="Portfolio" icon={<PersonPinIcon />} {...a11yProps(1)} />
          <Tab label="Resume" icon={<HelpIcon />} {...a11yProps(2)} />
          </Tabs>
      </AppBar>

      
      <TabPanel value={value } index={0}  >
      Me
      </TabPanel>
      <TabPanel value={value && <Portfolio /> } index={1}  >
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={2} >
        Resume
      </TabPanel>

      {/* {value === 0 && <Me />} */}
      {value === 1 && <Portfolio />}
      {value === 2 && <Resume /> }
      
    </div>
    </>
  );
}



  