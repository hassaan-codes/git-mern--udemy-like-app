import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <>
      <Container h={'120vh'} p={16}>
        <Heading children={'Welcome'} m={8} textAlign={'center'}/>
        <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={0}>
          <Box bg={'purple.400'} p={4} css={{ borderRadius: '8px 8px 0px 0px'}}>
            <Text color={'black'} children={'Premium Plan - $99'}/>
          </Box>
          <Box p={4}>
            <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
              <Text children={'Subscribe to premium plan to get access to all content!'}/>
              <Heading size={'md'} children={'$99 only'}/>
            </VStack>

            <Button my={8} w={'full'} colorScheme='purple'>Buy Now!</Button>
          </Box>

          <Box bg={'blackAlpha.600'} p={4} css={{borderRadius: '0px 0px 8px 8px'}}>
            <Heading size={'sm'} children={'100% refund at cancellation'} color={'white'} textTransform={'uppercase'}/>
            <Text fontSize={'xs'} color={'white'} children={'*Terms and Conditions Apply'}/>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export default Subscribe