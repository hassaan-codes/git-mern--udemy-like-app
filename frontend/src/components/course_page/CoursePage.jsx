import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from '../../assets/videos/intro.mp4'

const CoursePage = () => {
    
    const [lectureIndex, setLectureIndex] = useState(0);

    const lectures = [
        {
            _id: 'fadas',
            title: 'testTitle',
            description: 'Test Description...',
            video:{
                url:'gjhj',
            }
        },
        {
            _id: 'fadas',
            title: 'testTitle',
            description: 'Test Description...',
            video:{
                url:'gjhj',
            }
        },
        {
            _id: 'fadas',
            title: 'testTitle',
            description: 'Test Description...',
            video:{
                url:'gjhj',
            }
        },
    ]

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
        <Box>
            <video
                width={'full'}
                controls
                controlsList='nodownload'
                disablePictureInPicture
                disableRemotePlayback
                src = {introVideo}
            >
            </video>

            <Heading m={4} children={`#${lectureIndex + 1} ${lectures[lectureIndex].title}`}/>
            <Heading m={4} children={'description'}/>
            <Text m={4} children={lectures[lectureIndex].description} />
        </Box>

        <VStack>
            {
                lectures.map((lecture, index) => (
                    <button key={lecture._id}
                        style={{
                            width:'100%',
                            padding: '1rem',
                            textAlign: 'center',
                            margin: 0,
                            borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
                        }}

                        onClick={() => {setLectureIndex(index)}}
                    >
                        <Text noOfLines={1}>
                            #{index+1} {lecture.title} 
                        </Text>
                    </button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage