import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ChevronDownIcon,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'



function Navigation() {

  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      +
    </MenuButton>
    <MenuList>
      <MenuItem minH="48px">
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/100/100"
          alt="Fluffybuns the destroyer"
          mr="12px"
        />
        <span>Fluffybuns the Destroyer</span>
      </MenuItem>
      <MenuItem minH="40px">
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/120/120"
          alt="Simon the pensive"
          mr="12px"
        />
        <span>Simon the pensive</span>
      </MenuItem>
    </MenuList>
  </Menu>
  )
}

  export default Navigation;


