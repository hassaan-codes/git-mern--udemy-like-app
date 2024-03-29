import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import './home.css'
import vg from '../../assets/images/bg.png'
import { CgGoogle, CgYoutube } from 'react-icons/cg'
import {SiCoursera, SiUdemy} from 'react-icons/si'
import {DiAws} from 'react-icons/di'
import introVideo from '../../assets/videos/intro.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems='center'
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            align={['center', 'flex-end']}
            spacing={8}
          >
            <Heading children={'LEARN FROM THE EXPERTS'} size={'2xl'}/>
            <Text textAlign={['center', 'left']} children={'Find valuable Content At Reasonable Price!'} />
            <Link to={'/courses'}>
              <Button size={'lg'} colorScheme='purple' >
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit={'contain'} />
        </Stack>
      </div>

      <Box padding={'8'} bg={'purple.800'}>
        <Heading 
          textAlign={'center'}
          fontFamily={'body'}
          color={'purple.200'}
          children={'OUR PARTENERS'} 
        />

        <HStack className='brands-banner' justifyContent={'space-evenly'} marginTop={4}>
          <CgGoogle/>
          <CgYoutube/>
          <SiCoursera/>
          <SiUdemy/>
          <DiAws/>
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          controlsList='nodownload nofullscreen'
          disablePictureInPicture
          disableRemotePlayback
          src = {introVideo}
        >
        </video>
      </div>
    </section>
  )
}

export default Home