import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const isAuthenticated = true;
    const user = {
        role: 'admin',
    }

    const logoutHandler = () => {
        console.log('logout');
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
                        <LinkButton url='/' title='Home' />
                        <LinkButton url='/courses' title='Browse All Courses' />
                        <LinkButton url='/request' title='Request a Course' />
                        <LinkButton url='/contactus' title='Contact Us' />
                        <LinkButton url='/about' title='About' />

                        <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'}>                     
                            {
                                isAuthenticated ? <>
                                        <VStack>
                                            <HStack>
                                                <Link to={'/profile'}>
                                                    <Button colorScheme='purple' variant={'ghost'}>Profile</Button>
                                                </Link>

                                                <Button variant={'ghost'} onClick={logoutHandler}><RiLogoutBoxLine/> Logout</Button>
                                            </HStack>

                                            {
                                                user && user.role==='admin' 
                                                    && <Link to={'/admin/dashboard'}>
                                                        <Button colorScheme='purple' variant={'ghost'}>
                                                            <RiDashboardFill style={{margin:'4px'}}/>
                                                            Dashboard
                                                        </Button>    
                                                    </Link>
                                            }
                                        </VStack>
                                    </> 
                                    : <>
                                        <Link to={'/login'}>
                                            <Button colorScheme='purple'>Login</Button>
                                        </Link>
                                            <p>OR</p>
                                        <Link to={'/register'}>
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

const LinkButton = ({url='/', title='Home'}) => {
    return (
        <Link to={url}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
}

export default Header