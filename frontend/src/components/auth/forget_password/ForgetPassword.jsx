import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

  return (
    <>
        <Container py={16} minH={'90vh'}>
            <form>
                <Heading 
                    children={'Forget Password'} 
                    my={16} 
                    textTransform={'uppercase'} 
                    textAlign={['center', 'left']}
                />

                <VStack spacing={8}>
                    <Input 
                        required 
                        id='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='user@gmail.com'
                        type='email'
                        focusBorderColor='purple.500'
                    />
                    
                    <Button type='submit' colorScheme='purple' width={'full'}>Send Reset Link</Button>
                </VStack>
            </form>
        </Container> 
    </>
  )
}

export default ForgetPassword