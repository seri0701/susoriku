import { Center } from '@mantine/core'

import GridLayout from 'components/Layout/GridLayout'
import PostList from 'components/Organisms/PostList'
import IndexCardCom from 'components/MountUnits/IndexCardCom'

const IndexCom = () => {
  return (
    <>
      <GridLayout>
        <IndexCardCom
          title="定期練習予定 &rarr;"
          description="Discover and develop a competition that suits you."
          link="/calender/regular2022"
        />
        <IndexCardCom
          title="７月練習予定 &rarr;"
          description="Find in-depth information about features and KYOUSHITU."
          link="/calender/calender07"
        />
        <IndexCardCom
          title="８月練習予定 &rarr;"
          description="Learn about Athletics in an interactive course with drill!"
          link="/calender/calender08"
        />
        <IndexCardCom
          title="年間行事予定 &rarr;"
          description="Instantly deployed your Next.js site to a public URL with Vercel."
          link="/event/event2022"
        />
      </GridLayout>
      <PostList />
      <Center>
        <IndexCardCom
          title="競技会結果 &rarr;"
          description="写真と結果のリンク"
          link="/result"
        />
      </Center>
    </>
  )
}

export default IndexCom
