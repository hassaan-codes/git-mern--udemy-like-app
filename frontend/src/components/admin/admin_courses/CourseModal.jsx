import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModal = ({isOpen, onClose, courseId, courseTitle, deleteHandler, addHandler}) => {
    const courseTitle = "TestCourse";

  return (
    <Modal isOpen={isOpen} size={'full'}> 
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader>{courseTitle}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody p={16}>
                <Grid templateColumns={['1fr', '3fr 1fr']}>
                    <Box p={['0', '16']}>
                        <Box my={5}>
                            <Heading>{courseTitle}</Heading>
                            <Heading size={'sm'} opacity={0.4}>#{courseId}</Heading>
                        </Box>
                        <Heading size={'lg'}>Lectures</Heading>
                        <VideoCard  
                            courseId={'cid'}
                            lectureId={'lid'}
                            title={'Lecture title'}
                            num={1}
                            description={'kjasfk KJAD'}
                            deleteHandler={deleteHandler}
                        />
                    </Box>
                </Grid>
            </ModalBody>
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