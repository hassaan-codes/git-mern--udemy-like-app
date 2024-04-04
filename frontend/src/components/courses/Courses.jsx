import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({views, title, imgSrc, id, addToPlaylistHandler, creator, description, lectureCount}) => {
    return <>
        <VStack className='course' alignItems={['center', 'flex-start']}
        >
            <Image src={imgSrc} boxSize={60} objectFit={'contain'}/>
            <Heading textAlign={['center', 'left']} maxW={200} size={'sm'} noOfLines={3} children={title}/>
            <Text children={description} noOfLines={2}/>

            <HStack>
                <Text noOfLines={2} fontWeight={'bold'} textTransform={'uppercase'} children={'Created by'}/>
                <Text noOfLines={2} textTransform={'uppercase'} children={creator}/>
            </HStack>
            
            <Heading textTransform={'uppercase'} textAlign={'center'} size={'xs'} children={`Lectures - ${lectureCount}`} />
            <Heading textTransform={'uppercase'} size={'xs'} children={`Views - ${views}`} />

            <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/course/${id}`}>
                    <Button colorScheme='purple'>Watch Now</Button>
                </Link>

                <Button 
                    colorScheme='purple' 
                    variant={'ghost'}
                    onClick={() => addToPlaylistHandler(id)}
                >
                    Add To Playlist
                </Button>
            </Stack>
        </VStack>
    </>
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    const addToPlaylistHandler = (id) => {

    }

    const categories = [
        'Web Development',
        'Artificial Intellegence',
        'DS & Algo',
        'Blockchain',
        'App Develoment',
        'Data Science',
    ]

  return (
    <>
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={8}>
            <Heading children={'All Courses'} m={8}/>
            <Input
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder='Search any course...' 
                type='text'
                focusBorderColor='purple.500'
            />

            <HStack
                overflowX={'auto'}
                paddingY={8}
                css={{
                    '&::-webkit-scrollbar': {
                        display:'none',
                    }
                }}
            >
                {
                    categories.map((category, index) => (
                        <Button onClick={() => setCategory(category)} key={index} minW={'60'}>
                            <Text>{category}</Text>
                        </Button>
                    ))
                }
            </HStack>

            <Stack
                direction={['column', 'row']}
                flexWrap={'wrap'}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
            >
                <CourseCard 
                    title={'Test Title'}
                    description={'Test DEscription'}
                    views={23}
                    imgSrc={'test src'}
                    id={'test id'}
                    creator={'test creator'}
                    lectureCount={2}
                    addToPlaylistHandler={addToPlaylistHandler}
                />
            </Stack>
        </Container>
    </>
  )
}

export default Courses