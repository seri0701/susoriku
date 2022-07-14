import { Center } from '@mantine/core'

import GridLayout from 'components/Layout/GridLayout'
import PostList from 'components/Organisms/PostList'
import IndexCard from 'components/MountUnits/IndexCard'
import IndexTitleCard from 'components/MountUnits/IndexTitleCard'

const IndexCom = () => {
  return (
    <>
      <GridLayout>
        <IndexCard
          title="定期練習予定 &rarr;"
          description="Discover and develop a competition that suits you."
          link="/calender/regular2022"
        />
        <IndexCard
          title="７月練習予定 &rarr;"
          description="Find in-depth information about features and KYOUSHITU."
          link="/calender/calender07"
        />
        <IndexCard
          title="８月練習予定 &rarr;"
          description="Learn about Athletics in an interactive course with drill!"
          link="/calender/calender08"
        />
        <IndexCard
          title="年間行事予定 &rarr;"
          description="Instantly deployed your Next.js site to a public URL with Vercel."
          link="/event/event2022"
        />
      </GridLayout>
      <PostList />
      <Center>
        <IndexTitleCard title="競技会結果 &rarr;" link="/result" />
      </Center>
      <Center>
        <IndexTitleCard title="育成方針 &rarr;" link="/result" />
      </Center>
    </>
  )
}

export default IndexCom
