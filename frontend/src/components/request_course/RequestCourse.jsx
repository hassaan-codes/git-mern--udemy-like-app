import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RequestCourse = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

  return (
    <>
        <Container height={'110vh'}>
            <VStack height={'full'} justifyContent={'center'} spacing={16}>
                <Heading children={'Request New Course'} />
                
                <form style={{width: '100%'}}>
                    <Box my={4}>
                        <FormLabel htmlFor='name' children={'Name'}/>
                        <Input 
                            required 
                            id='name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder='fullname'
                            type='text'
                            focusBorderColor='purple.500'
                        />
                    </Box>
                    
                    <Box my={4}>
                        <FormLabel htmlFor='email' children={'Email'}/>
                        <Input 
                            required 
                            id='email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='user@gmail.com'
                            type='email'
                            focusBorderColor='purple.500'
                        />
                    </Box>

                    <Box my={4}>
                        <FormLabel htmlFor='course' children={'Course'}/>
                        <Textarea
                            required 
                            id='course' 
                            value={course} 
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder='Explain the course...'
                            type='text'
                            focusBorderColor='purple.500'
                        />
                    </Box>
                    
                    <Button my={4} colorScheme='purple' type='submit'>Send</Button>

                    <Box my={4}>
                        Explore courses! <Link to={'/courses'}>
                                    <Button colorScheme='purple' variant={'link'}>Click</Button>
                                </Link>
                                {' here'}
                    </Box>

                </form>
            </VStack>
        </Container> 
    </>
  )
}

export default RequestCourse