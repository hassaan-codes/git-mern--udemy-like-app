import { Avatar, Box, Button, Center, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

  return (
    <>
        <Container height={'170vh'}>
            <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children={'Registration'} textTransform={'uppercase'}/>
                <form style={{width: '100%'}}>
                    <Box my={4} display={'flex'} justifyContent={'center'}>
                        <Avatar size={'2xl'} src={imagePrev}/>
                    </Box>

                    <Box my={4}>
                        <FormLabel htmlFor='name' children={'Name'}/>
                        <Input 
                            required 
                            id='name' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Full Name'
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
                    <Box my={4}>
                        <FormLabel htmlFor='chooseAvatar' children={'Choose Avatar'}/>
                        <Input 
                            required 
                            accept='image/*'
                            id='avatar' 
                            type='file'
                            border={'none'}
                            onChange={changeImageHandler}
                        />
                    </Box>

                    <Button my={4} colorScheme='purple' type='submit'>Sign Up</Button>

                    <Box my={4}>
                        Already have an account? <Link to={'/login'}>
                                    <Button colorScheme='purple' variant={'link'}>Login</Button>
                                </Link>
                                {' here'}
                    </Box>
                </form>
            </VStack>
        </Container>
    </>
  )
}
export default Register