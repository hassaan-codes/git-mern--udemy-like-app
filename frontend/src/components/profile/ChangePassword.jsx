import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

  return (
    <>
        <Container py={16} minH={'90vh'}>
            <form>
                <Heading my={16} textAlign={['center', 'left']} textTransform={'uppercase'}>Change Password</Heading>
                <VStack spacing={8}>
                    <Input
                        required 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        placeholder='Enter current password'
                        type='password'
                        focusBorderColor='purple.500'
                    />
                    <Input
                        required 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='Enter new password'
                        type='password'
                        focusBorderColor='purple.500'
                    />

                    <Button width={'full'} colorScheme='purple' type='submit'>Submit</Button>
                </VStack>
            </form>
        </Container>
    </>
  )
}

export default ChangePassword