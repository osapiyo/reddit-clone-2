import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Icon,
  MenuDivider,
  Text,
} from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import { FaRedditSquare } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { CgFontSpacing, CgProfile } from 'react-icons/cg'
import { MdOutlineLogout } from 'react-icons/md'
import { auth } from '../../../firebase/clientApp'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../atoms/authModalAtom'
import { IoSparkles } from 'react-icons/io5'

type UserMenuProps = {
  user?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const setAuModalState = useSetRecoilState(authModalState)
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        {' '}
        <Flex align='center'>
          <Flex align='center'>
            {user ? (
              <>
                <Icon
                  as={FaRedditSquare}
                  fontSize='24px'
                  mr={2}
                  color='gray.300'
                />
                <Flex>
                  <Flex
                    direction='column'
                    display={{ base: 'none', lg: 'flex' }}
                    fontSize='10pt'
                    align='flex-start'
                    mr={8}
                  >
                    <Text fontWeight={700}>
                      {user?.displayName || user.email?.split('@')[0]}
                    </Text>
                    <Flex>
                      <Icon as={IoSparkles} color='brand.100' mr={1} />
                      <Text color='gray.400'>1 karma</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color='gray.400' mr={1} as={VscAccount} />
            )}{' '}
          </Flex>{' '}
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize='12px'
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr={2} as={CgProfile} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize='12px'
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() => signOut(auth)}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr={2} as={MdOutlineLogout} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            {' '}
            <MenuItem
              fontSize='12px'
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() => setAuModalState({ open: true, view: 'login' })}
            >
              <Flex align={'center'}>
                <Icon fontSize={20} mr={2} as={MdOutlineLogout} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  )
}
export default UserMenu
