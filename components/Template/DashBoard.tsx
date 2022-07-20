import { Logout } from 'tabler-icons-react'
import { Button, Center } from '@mantine/core'
import { supabase } from '../../utils/supabase'
import { Layout } from '../../components/FixedElement/Layout'
import HeaderCom from '../FixedElement/HeaderCom'
import FooterCom from '../FixedElement/FooterCom'
import IndexTitleCard from 'components/Molecules/IndexTitleCard'

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <>
      <Layout title="Dashboard">
        <HeaderCom Color="gray" Caption="どの記事を投稿する？" />
        <IndexTitleCard title="Topの記事 &rarr;" link="/edit/postedit" />
        <IndexTitleCard title="競技会結果 &rarr;" link="/edit/resultedit" />
        <Center className="mb-5">
          <Button
            color="gray"
            type="submit"
            onClick={signOut}
            leftIcon={<Logout />}
          >
            ログアウト
          </Button>
        </Center>
      </Layout>
      <FooterCom />
    </>
  )
}
