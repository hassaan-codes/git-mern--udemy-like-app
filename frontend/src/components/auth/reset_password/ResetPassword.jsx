import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();

    console.log(params.resetToken);

  return (
    <>
        <Container py={16} minH={'90vh'}>
            <form>
                <Heading 
                    children={'Reset Password'} 
                    my={16} 
                    textTransform={'uppercase'} 
                    textAlign={['center', 'left']}
                />

                <VStack spacing={8}>
                    <Input 
                        required 
                        id='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='********'
                        type='password'
                        focusBorderColor='purple.500'
                    />
                    
                    <Button type='submit' colorScheme='purple' width={'full'}>Reset Password</Button>
                </VStack>
            </form>
        </Container> 
    </>
  )
}

export default ResetPassword