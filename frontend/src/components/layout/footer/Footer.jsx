import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'

const Footer = () => {
  return (
    <>
        <Box padding={4} bg='blackAlpha.900' minH={'10vh'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={['center', 'flex-start']} width={'full'}>
                    <Heading children='All Right blah blah blah...' color={'white'}/>
                    <Heading children='more blah blah blah...' color={'yellow.400'} size={'sm'}/>
                </VStack>

                <HStack spacing={['2', '10']} justifyContent={'center'} fontSize={40}>
                    <a href = 'youtube.com' target='blank'>
                        <TiSocialYoutubeCircular/>
                    </a>
                    <a href = 'instagram.com' target='blank'>
                        <TiSocialInstagramCircular/>
                    </a>
                    <a href = 'youtube.com' target='blank'>
                        <DiGithub/>
                    </a>
                </HStack>
            </Stack>
        </Box>
    </>
  )
}

export default Footer