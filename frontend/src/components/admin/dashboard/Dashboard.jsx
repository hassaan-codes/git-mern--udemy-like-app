import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import { Sidebar } from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart'

const DataBox = ({title, quantity, quantityPercent, profit}) => {
    return <Box width={['full', '20%']} boxShadow={'-2px 0px 10px rgba(107, 70, 193, 0.5)'} p={8} borderRadius={'lg'}>
        <Text>{title}</Text>
        <HStack spacing={6}>
            <Text fontSize={'2xl'} fontWeight={'bold'}>{quantity}</Text>
            <HStack>
                <Text>{quantityPercent + '%'}</Text>
                {
                    profit 
                    ? <RiArrowUpLine color='green'/>
                    : <RiArrowDownLine color='red'/>
                }
            </HStack>
        </HStack>

        <Text opacity={0.5}>Since last month</Text>
    </Box>
}

const ProgressBar = ({title, value, profit}) => {
    return <Box py={4} px={['0', '20']}>
        <Heading size={'sm'} mb={2}>
            {title}
        </Heading>
        <HStack width={'full'} alignItems={'center'}>
            <Text>{profit?'%0':`-${value}%`}</Text>
            <Progress width={'full'} value={profit?value:0} colorScheme='purple'/>
            <Text>{value > 100 ? `${value}%` : '100%'}</Text>
        </HStack>
    </Box>
}

const Dashboard = () => {
  return (
    <>
        <Grid css={{ cursor: `url(${cursor}), default` }} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box
                boxSizing='border-box'
                py={16}
                px={['4', '0']}
            >
                <Text textAlign={'center'} opacity={0.5}>Last change was on: {new Date().toString().split('G')[0]}</Text>
                <Heading ml={['0', '16']} mb={16} textAlign={['center', 'left']}>Dashboard</Heading>
                <Stack direction={['column', 'row']} minH={24} justifyContent={'space-evenly'}>
                    <DataBox title='Views' quantity={123} quantityPercent={30} profit={true}/>
                    <DataBox title='Users' quantity={20} quantityPercent={78} profit={true}/>
                    <DataBox title='Subscription' quantity={12} quantityPercent={20} profit={false}/>
                </Stack>

                <Box
                    margin={['0', '16']}
                    borderRadius={'lg'}
                    padding={['0', '16']}
                    mt={['4', '16']}
                    boxShadow={'-2px 0px 10px rgba(107, 70, 193, 0.5)'}
                >
                    <Heading textAlign={['center', 'left']} size={'md'} pt={['8', '0']} ml={['0', '16']}>
                        Views Graph
                    </Heading>

                    <LineChart/>
                </Box>

                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box p={4}>
                        <Heading textAlign={['center', 'left']} size={'md'} my={8} ml={['0', '16']}>
                            Progress Bar
                        </Heading>

                        <Box>
                            <ProgressBar profit={true} title="Views" value={30}/>
                            <ProgressBar profit={true} title="Users" value={78}/>
                            <ProgressBar profit={false} title="Subscription" value={20}/>
                        </Box>
                    </Box>

                    <Box p={['0', '16']} boxSizing='border-box' py={4}>
                        <Heading textAlign={'center'} size={'md'} mb={4}>Users</Heading>
                        <DoughnutChart/>
                    </Box>
                </Grid>
            </Box>

            <Sidebar/>
        </Grid>
    </>
  )
}

export default Dashboard