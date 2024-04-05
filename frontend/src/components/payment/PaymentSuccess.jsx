import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container height={'120vh'} p={16}>
        <Heading my={8} textAlign={'center'}>You have access to Premium Content</Heading>
        
        <VStack boxShadow={'lg'} pb={16} alignItems={'center'}  borderRadius={'lg'}>
            <Box width={'full'} bgColor={'purple.400'} p={4} css={{borderRadius: '8px 8px 0px 0px'}}>
                <Text color={'black'}>
                    Payment Success!
                </Text>
            </Box>
            <Box p={4}>
                <VStack textAlign={'center'} px={8} mt={4} spacing={8}>
                    <Text>
                        Congratulations! You are now premium member. 
                    </Text>

                    <Heading size={'4xl'}>
                        <RiCheckboxCircleFill/>
                    </Heading>
                </VStack>
            </Box>

            <Link to={'/profile'}><Button variant={'ghost'}>Goto Profile</Button></Link>
            <Heading>
                Reference: akgalkdflasd
            </Heading>
        </VStack>
    </Container>
  )
}

export default PaymentSuccess