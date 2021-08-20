import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image
   
} from '@chakra-ui/react';


import picture from '../../assets/images/react-profile.png'

const Me = () => {
  
  
  return (

    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={800}
            fontSize={36}
            >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '80%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              
              }}>
              Hiya,
            </Text>
            <br />
            
          </Heading>
          <Text color={'black.500'}>
            My name is Amanda Hoshor. Web development recent graduate. Looking to enter the exciting world of web coding in an oppurtunity that provides growth. 
            <br/>
            Background in data entry and quality assurance. Obtained an information management degree in 2016. Strong background in quality assurance and control. 
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            
            <Image
              alt={'Me'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'75%'}
              src={
                picture
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default Me;

