import { Logout } from 'tabler-icons-react'
import { Button, Center } from '@mantine/core'
import { supabase } from '../../utils/supabase'

export const LogoutButtonIndigo = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Center className="py-5">
      <Button
        color="indigo"
        type="submit"
        onClick={signOut}
        leftIcon={<Logout />}
      >
        ログアウト
      </Button>
    </Center>
  )
}
