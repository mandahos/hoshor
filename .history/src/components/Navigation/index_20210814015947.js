import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  Stack,
  RadioGroup,
  Button
} from "@chakra-ui/react"



function Navigation() {
  const { isOpen, onOpen, onClose } = Navigation()
  const [placement, setPlacement] = React.useState("right")

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Portfolio</p>
            <p>Resume</p>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

  export default Navigation;


