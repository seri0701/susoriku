import { FC, ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from 'utils/supabase'

type Props = {
  children: ReactNode
}

export const AuthCom: FC<Props> = ({ children }) => {
  const { push, pathname } = useRouter()
  const validateSession = async () => {
    const user = supabase.auth.user()
    if (user && pathname === 'postedit') {
      push('postedit')
    }
    if (user && pathname === 'resultedit') {
      push('resultedit')
    } else if (!user && pathname !== 'edit') {
      await push('edit')
    }
  }
  supabase.auth.onAuthStateChange((event, _) => {
    if (event === 'SIGNED_IN' && pathname === '/') {
      push('edit')
    }
    if (event === 'SIGNED_OUT') {
      push('edit')
    }
  })
  useEffect(() => {
    validateSession()
  }, [])
  return <div>{children}</div>
}
