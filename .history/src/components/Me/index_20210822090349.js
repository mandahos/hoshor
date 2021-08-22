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
import { makeStyles } from '@material-ui/core/styles';


import picture from '../../assets/images/portfolio.jpg'

const useStyles = makeStyles({
  header: {
    background: '#3066BE',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 5px 7px 2px #9b9fb5',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },
  textBox: {
    background: '#6D9DC5'
  }
  
});

const Me = () => {
  const classes = useStyles();
  return (

    <Container maxW={'7xl'} >
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        >
        
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
                
              
              }}
              className={classes.header}>
              Amanda Hoshor
            </Text>
            <br />
            
          </Heading>
          <Text color={'black.500'} className={classes.textBox}>
            Hiya! Web development recent graduate. Looking to enter the exciting world of web coding in an oppurtunity that provides growth. 
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
              padding={'25px'}
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

