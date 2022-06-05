import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/clientApp'

const Home: NextPage = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <>
      {user ? (
        <Text fontSize='36px' align='center' color='red' mt={6}>
          I love Aki!{' '}
        </Text>
      ) : (
        <Text fontSize='20px'>hello</Text>
      )}
    </>
  )
}

export default Home
