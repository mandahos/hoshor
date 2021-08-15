import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'



function Navigation() {

  return (
    <Tabs variant="unstyled">
  <TabList>
    <Tab _selected={{ color: "white", bg: "blue.500" }}>Tab 1</Tab>
    <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

  export default Navigation;


