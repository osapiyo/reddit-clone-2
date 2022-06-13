import React from 'react'
import PageContent from '../../../components/Layout/PageContent'
import { Text, Box } from '@chakra-ui/react'
import NewPostForm from '../../../components/Posts/NewPostForm'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth)
  return (
    <PageContent>
      <>
        <Box p='14px 0px' borderBottom='1px solid' borderColor='white'>
          <Text>Create a post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <></>
    </PageContent>
  )
}
export default SubmitPostPage
