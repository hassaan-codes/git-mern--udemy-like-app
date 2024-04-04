import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
        <Container height={'130vh'}>
            <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children={'Welcome to Learning Hub'}/>
                <form style={{width: '100%'}}>
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
                        <FormLabel htmlFor='password' children={'Password'}/>
                        <Input 
                            required 
                            id='password' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='********'
                            type='password'
                            focusBorderColor='purple.500'
                        />
                    </Box>

                    <Box>
                        <Link to={'/forgetpassword'}> 
                            <Button fontSize={'sm'} variant={'link'}>Forget Password?</Button>
                        </Link>
                    </Box>

                    <Button my={4} colorScheme='purple' type='submit'>Login</Button>

                    <Box my={4}>
                        New User? <Link to={'/register'}>
                                    <Button colorScheme='purple' variant={'link'}>Sign Up</Button>
                                </Link>
                                {' here'}
                    </Box>
                </form>
            </VStack>
        </Container>
    </>
  )
}

export default Login