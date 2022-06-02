import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Icon,
  MenuDivider,
} from '@chakra-ui/react'
import { signOut, User } from 'firebase/auth'
import React from 'react'
import { FaRedditSquare } from 'react-icons/fa'
import { VscAccount } from 'react-icons/vsc'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLogout } from 'react-icons/md'
import { auth } from '../../../firebase/clientApp'

type UserMenuProps = {
  user?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        {user ? (
          <Flex align='center'>
            <Flex align='center'>
              <>
                <Flex>
                  <Icon
                    as={FaRedditSquare}
                    fontSize='24px'
                    mr={1}
                    color='gray.300'
                  />
                </Flex>
              </>
              <ChevronDownIcon />
            </Flex>
          </Flex>
        ) : (
          <Icon fontSize={24} color='gray.400' mr={1} as={VscAccount} />
        )}
      </MenuButton>
      <MenuList>
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
      </MenuList>
    </Menu>
  )
}
export default UserMenu
