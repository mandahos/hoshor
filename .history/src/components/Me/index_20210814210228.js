import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'


import Me from '../../assets/images/react-profile.png'

export default function CallToActionWithVideo() {
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
            My name is Amanda Hoshor. Web develop recent graduate. Looking to enter the exciting world of web coding in an oppurtunity that provides growth. In my free time, I can be found at local pop up shows or getting lost in the mountain of UT. 
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
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Me'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                "../../assets/images/react-profile.png"
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

