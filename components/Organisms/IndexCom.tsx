import GridLayout from "components/Layout/GridLayout"
import IndexCard from "components/Molecules/IndexCard"
import IndexTitleCard from "components/Molecules/IndexTitleCard"

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
          title="6月練習予定 &rarr;"
          description="Learn about Athletics in an interactive course with drill!"
          link="/calender/calender6"
        />
        <IndexCard
          title="年間行事予定 &rarr;"
          description="Instantly deployed your Next.js site to a public URL with Vercel."
          link="/event/event2023"
        />
        <IndexTitleCard
          title="走り幅跳び練習内容 &rarr;"
          link="/practice/longjamp"
        />
        {/* <IndexTitleCard title="競技会結果 &rarr;" link="/result" /> */}
        <IndexTitleCard title="育成方針 &rarr;" link="/plan" />
        {/* <IndexTitleCard title="記事投稿 &rarr;" link="/edit" /> */}
        {/* <IndexTitleCard title="チャットルーム &rarr;" link="/note" /> */}
      </GridLayout>
    </>
  )
}

export default IndexCom
