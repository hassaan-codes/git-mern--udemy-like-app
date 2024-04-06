import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

const LinkButton = ({url, text, Icon, location}) => {
    const active = location.pathname === `/admin${url}`;

    return <Link to={`/admin${url}`}>
                <Button fontSize={'lg'} variant={'ghost'} colorScheme={active?'purple':''}>
                    <Icon style={{ margin:4 }}/>
                    {text}
                </Button>
            </Link>
}

export const Sidebar = () => {
    const location = useLocation();

  return (
    <>
        <VStack spacing={8} p={16} boxShadow={'-2px 0px 10px rgba(107, 70, 193, 0.5)'}>
            <LinkButton Icon={RiDashboardFill} url={'/dashboard'} text={'Dashboard'} location={location}/>
            <LinkButton Icon={RiAddCircleFill} url={'/createcourse'} text={'Create Course'} location={location}/>
            <LinkButton Icon={RiEyeFill} url={'/courses'} text={'Courses'} location={location}/>
            <LinkButton Icon={RiUser3Fill} url={'/users'} text={'Users'} location={location}/>
        </VStack>
    </>
  )
}
