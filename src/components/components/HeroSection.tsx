import { Box, Button, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'


import React from 'react'
import {  BiRightArrowAlt } from 'react-icons/bi'

const HeroSection = () => {
  return (
    <Stack width={'100%'} marginTop={'2rem'} alignItems={'center'} flexDirection={['column',"column",'column','row','row']} justify={'space-evenly'} gap={'3rem'}>
       <Stack width={['90%','90%',"90%","50%","40%"]} display={'flex'} gap={'3rem'} flexDirection={'column'}>
          <Heading textAlign={'center'} fontSize={['2rem','3rem']} lineHeight={'2.1rem'}>A New Way to Learn</Heading>
          <Text textAlign={'center'}>

          LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
          </Text>

          <Button display={'flex'} alignItems={'center'} justifyContent={'center'} width={'10rem'} borderRadius={'2rem'} margin={'auto'} bg={'teal.500'} _hover={{bg:"teal"}} color={'white'}>
            Create Account <BiRightArrowAlt/>
          </Button>
        
       </Stack>

       <Stack>
         <Image width={['15rem','30rem']} src='/banner.png'/>

       </Stack>
        
    </Stack>
  )
}

export default HeroSection