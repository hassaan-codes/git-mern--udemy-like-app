import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({isOpen, onClose, courseId, courseTitle, lectures=[], deleteHandler, addHandler}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }

    const closeHandler = () => {
        setTitle('');
        setDescription('');
        setVideo('');
        setVideoPrev('');
        onClose();
    }

  return (
    <Modal isOpen={isOpen} size={'full'} onClose={closeHandler} scrollBehavior='outside'> 
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>{courseTitle}</ModalHeader>
            <ModalBody p={16}>
                <Grid templateColumns={['1fr', '3fr 1fr']}>
                    <Box p={['0', '16']}>
                        <Box my={5}>
                            <Heading>{courseTitle}</Heading>
                            <Heading size={'sm'} opacity={0.4}>#{courseId}</Heading>
                        </Box>
                        <Heading size={'lg'}>Lectures</Heading>
                        {
                            lectures.map((lecture) => (
                                <VideoCard  
                                    courseId={'cid'}
                                    lectureId={'lid'}
                                    title={'Lecture title'}
                                    num={1}
                                    description={'kjasfk KJAD'}
                                    deleteHandler={deleteHandler}
                                />
                            ))
                        }
                    </Box>
                    <Box>
                        <form onSubmit={(e) => {addHandler(e, courseId, courseTitle, description, video)}}>
                            <VStack spacing={4}>
                                <Heading size={'md'} textTransform={'uppercase'}>Add Lectures</Heading>
                                <Input focusBorderColor='purple.300' placeholder='Title' onChange={(e) => {setTitle(e.target.value)}}/>
                                <Input focusBorderColor='purple.300' placeholder='Description' onChange={(e) => {setDescription(e.target.value)}}/>
                                <Input 
                                    required 
                                    accept='video/mp4'
                                    type='file'
                                    border={'none'}
                                    onChange={changeVideoHandler}
                                />

                                {
                                    videoPrev && (
                                        <video
                                            controlsList='nodownload'
                                            controls
                                            src={videoPrev}
                                        />
                                    )
                                }

                                <Button w={'full'} colorScheme='purple' type='submit'>Upload Lecture</Button>
                            </VStack>
                        </form>
                    </Box>
                </Grid>
            </ModalBody>

            <ModalFooter>
                <Button onClick={closeHandler}>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

const VideoCard = ({courseId, lectureId, title, num, description, deleteHandler}) =>{
    return <>
        <Stack direction={['column', 'row']} my={8} borderRadius={'lg'} boxShadow={'0px 0px 10px rgba(107, 70, 193, 0.5)'} justifyContent={['flex-start', 'space-between']} p={['4', '8']}>
            <Box>
                <Heading size={'sm'}>#{num + ' ' + title}</Heading>
                <Text>{description}</Text>
            </Box>
            <Button color={'purple.600'} onClick={() => deleteHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill/>
            </Button>
        </Stack>
    </>
}

export default CourseModal