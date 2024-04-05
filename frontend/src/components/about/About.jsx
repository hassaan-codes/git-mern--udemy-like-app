import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termsAndConditions from '../../assets/docs/termsAndCondition'

const Founder = () => {
    return <>
        <Stack direction={['column', 'row']} spacing={['4', '16']} padding={8}>
            <VStack>
                <Avatar boxSize={['40', '48']}/>
                <Text children={'Co-Founder'} opacity={0.7}/>
            </VStack>

            <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
                <Heading children={'Hassan'} size={['md', 'xl']}/>
                <Text children={'Hi, I am Full Stack Engineer!'} textAlign={['center', 'left']}/>
            </VStack>
        </Stack>
    </>
}

const VideoPlayer = () => {
    return <Box>
        <video
          muted
          loop
          autoPlay    
          controls
          controlsList='nodownload nofullscreen'
          disablePictureInPicture
          disableRemotePlayback
          src = {introVideo}
        >
        </video>
    </Box>
}

const TermsAndConditions = ({termsAndConditions}) => {
    return <>
        <Box>
            <Heading size={'md'} children={'Terms and Conditions'} textAlign={['center', 'left']} my={4}/>
            <Box height={'sm'} p={4} overflowY={'scroll'}>
                <Text textAlign={['center', 'left']} letterSpacing={'widest'} fontFamily={'heading'}>
                    {termsAndConditions}
                </Text>
                <Heading my={4} size={'xs'} children={'Refund is only applicable on cancellation within 7 days!'}/>
            </Box>
        </Box>
    </>
}

const About = () => {
  return (
    <>
        <Container maxW={'container.lg'} padding={16} boxShadow={'lg'}>
            <Heading children={'About Us'} textAlign={['center', 'left']}/>

            <Founder/>

            <Stack m={8} direction={['column', 'row']} alignItems={'center'}>
                <Text fontFamily={'cursive'} m={8} textAlign={['center', 'left']}>
                    About Us Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah
                    Blah Blah Blah Blah Blah Blah Blah
                </Text>
                <Link to={'/subscribe'}>
                    <Button variant={'ghost'} colorScheme='purple'> Checkout our plans </Button>
                </Link>
            </Stack>

            <VideoPlayer/>

            <TermsAndConditions termsAndConditions={termsAndConditions}/>
            <HStack my={4} p={4}>
                <RiSecurePaymentFill/>
                <Heading children={'Payment is secured by Razor Pay!'} size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}/>
            </HStack>

        </Container>
    </>
  )
}

export default About