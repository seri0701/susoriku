import { NextPage } from 'next'

import HeaderCom from 'components/FixedElement/HeaderCom'
import FooterCom from 'components/FixedElement/FooterCom'
import { Layout } from 'components/FixedElement/Layout'

import ResultCom from 'components/Organisms/ResultCom'

const Result: NextPage = () => {
  return (
    <Layout title="結果">
      <HeaderCom />
      <ResultCom />
      <FooterCom />
    </Layout>
  )
}

export default Result