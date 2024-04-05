import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const removeFromPlaylistHandler = ({courseId}) => {

}

const Profile = () => {
    const user = {
        name: 'User Test',
        email: 'usertest@gmail.com',
        createdAt: String(new Date().toISOString()),
        role: '',
        subscription: {
            status: 'active',
        },

        playlist: [
            {
                course: 'course',
                thumbnail: 'https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg',
            },
        ]
    }

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={8}>
        <Heading children={'Profile'} m={8} textTransform={'uppercase'}/>

        <Stack justifyContent={'flex-start'} direction={['column', 'row']} alignItems={'center'} spacing={['8', '16']} p={8}>
            <VStack>
                <Avatar boxSize={48}/>
                <Button colorScheme='purple' variant={'ghost'}>Change Photo</Button>
            </VStack>

            <VStack spacing={4} alignItems={['center', 'flex-start']}>
                <HStack>
                    <Text fontWeight={'bold'}>Name</Text>
                    <Text>{user.name}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight={'bold'}>Email</Text>
                    <Text>{user.email}</Text>
                </HStack>
                <HStack>
                    <Text fontWeight={'bold'}>Created At</Text>
                    <Text>{user.createdAt.split('T')[0]}</Text>
                </HStack>

                {
                    user.role !== 'admin'
                    && <HStack>
                            <Text fontWeight={'bold'}>Subscription</Text>
                            {
                                user.subscription.status === 'active' ? (
                                    <Button color={'purple.500'} variant={'ghost'}>Cancel Subscription</Button>
                                ): (
                                    <Link to={'/subscribe'}>
                                        <Button colorScheme='purple'>Purchase Subscription</Button>
                                    </Link>
                                )
                            }
                        </HStack>
                }

                <Stack direction={['center', 'row']} alignItems={'center'}>
                    <Link to={'/updateprofile'}>
                        <Button>Update Profile</Button>
                    </Link>

                    <Link to={'/changepassword'}>
                        <Button>Change Password</Button>
                    </Link>
                </Stack>
            </VStack>
        </Stack>

        <Heading size={'md'} my={8}>Playlist</Heading>
        {
            user.playlist.length > 0
            && <Stack direction={['column', 'row']} alignItems={'center'} flexWrap={'wrap'} p={4}>

                {
                    user.playlist.map((item) => (
                        <VStack w={48} m={2} key={item.course}>
                            <Image boxSize={'full'} objectFit={'contain'} src={item.thumbnail}/>
                            <HStack>
                                <Link to={`/course/${item.course}`}>
                                    <Button variant={'ghost'} colorScheme='purple'>Watch Now</Button>
                                </Link>

                                <Button onClick={() => { removeFromPlaylistHandler(item.course) }}>
                                    <RiDeleteBin7Fill/>
                                </Button>
                            </HStack>

                        </VStack>
                    ))
                }

            </Stack>
        }

        <ChangePhotoBox/>
    </Container>
  )
}

const ChangePhotoBox = () => {
    const [isOpen,setIsOpen] = useState(false);

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
        }
    }

    return <Modal>
        <ModalOverlay backdropFilter={'blur(10px)'} />
        <ModalContent>
            <ModalCloseButton/>
            <ModalBody>
                <Container>
                    <form>
                        <VStack spacing={8}>
                            <Avatar boxSize={48}/>
                            <Input type='file' onChange={changeImageHandler}/>

                            <Button width={'full'} colorScheme='purple' type='submit'>Change</Button>
                        </VStack>
                    </form>
                </Container>
            </ModalBody>

            <ModalFooter>
                <Button mr={3} >Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}

export default Profile