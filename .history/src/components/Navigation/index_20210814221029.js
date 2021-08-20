import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { Navigation } from '@material-ui/icons';

function Nav(props) {

  const {
    meSelected,
    setMeSelected,
    portfolioSelected,
    setPortfolioSelected,
    resumeSelected,
    setResumeSelected,
    
} = props;
  
  return (
    <Menu>
  <MenuButton as={Button} colorScheme="pink">
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup title="Profile">
      <MenuItem>My Account</MenuItem>
      <MenuItem>Payments </MenuItem>
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title="Help">
      <MenuItem>Docs</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </MenuGroup>
  </MenuList>
</Menu>
  );
}



  

default export Nav;

