import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const isAuthenticated = false;
    const user = {
        role: 'admin',
    }

    const logoutHandler = () => {
        console.log('logout');
        onClose();
    }

  return (
    <>
        <ColorModeSwitcher />

        <Button 
            colorScheme={'purple'} 
            width={12} 
            height={12} 
            rounded={'full'} 
            position={'fixed'}
            top={6}
            left={6}
            onClick={onOpen}
        >
            <RiMenu5Fill />
        </Button>

        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={'blur(3px)'} />
            <DrawerContent>
                <DrawerHeader borderBottomWidth={1}> Udemy Replica </DrawerHeader>
                <DrawerBody>
                    <VStack spacing={4} alignItems={'flex-start'}>
                        <LinkButton onClick={onClose} url='/' title='Home' />
                        <LinkButton onClick={onClose} url='/courses' title='Browse All Courses' />
                        <LinkButton onClick={onClose} url='/request' title='Request a Course' />
                        <LinkButton onClick={onClose} url='/contactus' title='Contact Us' />
                        <LinkButton onClick={onClose} url='/about' title='About' />

                        <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>                     
                            {
                                isAuthenticated ? <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to={'/profile'}>
                                                    <Button colorScheme='purple' variant={'ghost'}>Profile</Button>
                                                </Link>

                                                <Button variant={'ghost'} onClick={logoutHandler}><RiLogoutBoxLine/> Logout</Button>
                                            </HStack>

                                            {
                                                user && user.role==='admin' 
                                                    && <Link onClick={onClose} to={'/admin/dashboard'}>
                                                        <Button colorScheme='purple' variant={'ghost'}>
                                                            <RiDashboardFill style={{margin:'4px'}}/>
                                                            Dashboard
                                                        </Button>    
                                                    </Link>
                                            }
                                        </VStack>
                                    </> 
                                    : <>
                                        <Link onClick={onClose} to={'/login'}>
                                            <Button colorScheme='purple'>Login</Button>
                                        </Link>
                                            <p>OR</p>
                                        <Link onClick={onClose} to={'/register'}>
                                            <Button colorScheme='purple'>Signup</Button>
                                        </Link>
                                    </>
                            }
                        </HStack>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

const LinkButton = ({url='/', title='Home', onClick}) => {
    return (
        <Link onClick={onClick} to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
}

export default Header