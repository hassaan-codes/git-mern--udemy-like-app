import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import { Sidebar } from '../Sidebar'
import { RiDeleteBin7Fill, RiDeleteBinFill } from 'react-icons/ri'

const users = [
    {
        _id: 'test98yq2e',
        name: 'TestName',
        email: 'testmail@gmail.com',
        role: 'admin',
        subscription: {
            id:'3256',
            status:'active'
        }
    },
] 

const updateHandler = (id) => {

}

const deleteHandler = (id) => {

}

const Row = ({user, updateHandler, deleteHandler}) => {
    return <Tr>
        <Td>{user._id}</Td>
        <Td>{user.name}</Td>
        <Td>{user.email}</Td>
        <Td>{user.role}</Td>
        <Td>{user.subscription.status === 'active' ? 'Active' : 'Not Active' }</Td>
        <Td>
            <HStack justifyContent={'flex-end'}>
                <Button variant={'outline'} color={'purple.500'} onClick={() => {updateHandler(user._id)}}>Change Role</Button>
                <Button color={'purple.600'} onClick={() => {deleteHandler(user._id)}}>
                    <RiDeleteBin7Fill/>
                </Button>
            </HStack>
        </Td>
    </Tr>
}

const Users = () => {
  return (
    <>
        <Grid css={{ cursor: `url(${cursor}), default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '16']} overflowX={'auto'}>
                <Heading textTransform={'uppercase'} my={16} textAlign={['center', 'left']}>All Users</Heading>
                <TableContainer w={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>All Available Users</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users.map((user) => (
                                    <Row user={user} key={user._id} updateHandler={updateHandler} deleteHandler={deleteHandler}/>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

            <Sidebar/>
        </Grid>
    </>
  )
}

export default Users