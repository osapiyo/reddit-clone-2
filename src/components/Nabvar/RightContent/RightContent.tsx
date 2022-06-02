import { Button, Flex, Menu } from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../firebase/clientApp'
import AuthModal from '../../Modal/Auth/AuthModal'
import AuthButtons from './AuthButtons'
import Icons from './Icons'
import UserMenu from './UserMenu'

type RightContentProps = {
  user?: User | null
}

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify='center' align='center'>
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu />
      </Flex>
    </>
  )
}
export default RightContent
