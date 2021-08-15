import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
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
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'



function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState("right")

  return (
    <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? "Close" : "Open"}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
  )
}

  export default Navigation;


