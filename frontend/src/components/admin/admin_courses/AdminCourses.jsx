import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import { Sidebar } from '../Sidebar'
import { RiDeleteBin7Fill, RiDeleteBinFill } from 'react-icons/ri'
import CourseModal from './CourseModal'


const Row = ({course, detailsHandler, deleteHandler}) => {
    return <Tr>
        <Td>{course._id}</Td>
        <Td>
          <Image src={course.thumbnail.url} />
        </Td>
        <Td>{course.title}</Td>
        <Td textTransform={'uppercase'}>{course.category}</Td>
        <Td>{course.createdBy}</Td>
        <Td isNumeric>{course.views}</Td>
        <Td isNumeric>{course.lectureCount}</Td>
        <Td>
            <HStack justifyContent={'flex-end'}>
                <Button variant={'outline'} color={'purple.500'} onClick={() => {detailsHandler(course._id)}}>View Lectures</Button>
                <Button color={'purple.600'} onClick={() => {deleteHandler(course._id)}}>
                    <RiDeleteBin7Fill/>
                </Button>
            </HStack>
        </Td>
    </Tr>
}

const AdminCourses = () => {
  const courses = [
      {
          _id: 'test98yq2e',
          title: 'testTitle',
          category: 'Web Development',
          thumbnail: {
            url: 'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
          },
          createdBy: 'Random Creator',
          views: '123',
          lectureCount: '13',
      },
  ] 
  
  const {isOpen, onClose, onOpen} = useDisclosure();
  
  const detailsHandler = (id) => {
    onOpen();
  }
  
  const deleteHandler = (id) => {
  
  }

  const deleteLectureHandler = (courseId, lectureId) => {

  }

  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  }

  return (
    <>
        <Grid css={{ cursor: `url(${cursor}), default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '8']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} my={16} textAlign={['center', 'left']}>All Users</Heading>
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>All Available Courses</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Thumbnail</Th>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Creator</Th>
                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map((course) => (
                                    <Row course={course} key={course._id} detailsHandler={detailsHandler} deleteHandler={deleteHandler}/>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <CourseModal courseId={'course._id'} courseTitle={'Title slkajsd'} isOpen={isOpen} onClose={onClose} deleteHandler={deleteLectureHandler} addHandler={addLectureHandler}/>
            </Box>

            <Sidebar/>
        </Grid>
    </>
  )
}

export default AdminCourses