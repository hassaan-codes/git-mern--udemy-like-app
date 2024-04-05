import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <Container height={'120vh'}>
        
        <VStack justifyContent={'center'} h={'full'} spacing={4} pb={16} alignItems={'center'}>
            <RiErrorWarningFill size={'5rem'}/>
            <Heading my={8} textAlign={'center'} textTransform={'uppercase'}>Payment Failed!</Heading>
            <Link to={'/subscribe'}><Button variant={'ghost'}>Try Again</Button></Link>
        </VStack>
    </Container>
  )
}

export default PaymentFail