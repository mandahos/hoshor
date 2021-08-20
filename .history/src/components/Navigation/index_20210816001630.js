import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PortraitIcon from '@material-ui/icons/Portrait';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Link from '@material-ui/core/Link';


function Navigation(props) {

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.dark,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    meSelected,
    setMeSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
} = props;

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        More, Me
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       <StyledMenuItem>
          <ListItemIcon>
          <Link href={`${meSelected && 'navActive'}`}>
          < span onClick={() => {
                setMeSelected(true);
                setPortfolioSelected(false);
                setResumeSelected(false);
            }}>
            
            <PortraitIcon fontSize="small" />
            </span>
            </Link>
          </ListItemIcon>
          <ListItemText primary="Me" />
        </StyledMenuItem>

          <StyledMenuItem>
          <ListItemIcon>
            <WorkOutlineIcon fontSize="small" />
            <Link href={`${portfolioSelected && 'navActive'}`}>
              <span onClick={() => {
                setMeSelected(false);
                setPortfolioSelected(true);
                setResumeSelected(false);
            }}>
              </span>
            </Link>
           
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <LibraryBooksIcon fontSize="small" />
            <Link href={`${resumeSelected && 'navActive'}`}>
              <span onClick={() => {
                setMeSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(true);
            }}>

              </span>
            </Link>
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
  
}

  export default Navigation;


  