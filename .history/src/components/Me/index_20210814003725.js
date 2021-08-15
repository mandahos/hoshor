import React from 'react';

import { ChakraProvider } from "@chakra-ui/react"

function Me({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  )
}

export default Me;