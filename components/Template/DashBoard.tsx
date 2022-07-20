import { Layout } from '../../components/FixedElement/Layout'
import HeaderCom from '../FixedElement/HeaderCom'
import FooterCom from '../FixedElement/FooterCom'
import IndexTitleCard from 'components/Molecules/IndexTitleCard'
import { LogoutButtonGray } from 'components/Atom/LogoutButtonGray'

export const DashBoard = () => {
  return (
    <>
      <Layout title="Dashboard">
        <HeaderCom Color="gray" Caption="どの記事を投稿する？" />
        <IndexTitleCard title="Topの記事 &rarr;" link="/edit/postedit" />
        <IndexTitleCard title="競技会結果 &rarr;" link="/edit/resultedit" />
        <LogoutButtonGray />
      </Layout>
      <FooterCom />
    </>
  )
}
