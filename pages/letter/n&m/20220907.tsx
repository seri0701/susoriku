import type { NextPage } from "next"

import { Text, Title } from "@mantine/core"

import HeaderCom from "components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "components/FixedElement/FooterCom"
import { LayoutLetter } from "components/FixedElement/LayoutLetter"

const Plan: NextPage = () => {
  return (
    <>
      <LayoutLetter title="手紙">
        <Title order={2} color="maroon" align="center" className="mt-10 mb-6">
          七海と芽生皐へ
        </Title>
        <Title order={4} className="m-2">
          はじめに
        </Title>
        <Text color="dark" className="mx-2">
          中学新人お疲れ様でした。中学１年生では１番２番で県大会に進出。２人は東部の同世代を牽引するトップアスリートになりました。
        </Text>
        <Text color="dark" className="mx-2">
          これからは周りの中学生は２人を見て真似て成長していき、時には追い越してきます。逆に２人は東部大会では真似をする相手は少なく、自分達で模索していかなくてはいけません。
        </Text>
        <Text color="dark" className="mx-2">
          同世代の子達はみんな２人と話したがります。この前の大会の時のように、２人の周りには自然と人が集まってきますが、全員を相手にしているとお互いに実力を発揮することが難しくなります。
        </Text>
        <Text color="dark" className="mx-2">
          とはいえ周りや頑張っている人をないがしろにするわけにもいきませんので、うまく折り合いをつけて競技に臨みましょう。
        </Text>
        <Title order={4} className="m-2 mt-4">
          県大会に向けて
        </Title>
        <Title order={5} className="m-2">
          分析
        </Title>
        <Text color="dark" className="mx-2">
          今大会では１本目から３本目にかけて記録が低下しました。その後決勝では記録が向上したように記憶しています。
        </Text>
        <Text color="dark" className="mx-2">
          予選では跳躍までに２５分程待機時間がありましたが、この時間、２人は直立不動で待機をしていましたので、疲労のある中動かないことで冷えも加わり全身の筋肉が固まることで、パフォーマンスが低下したものと思われます。
        </Text>
        <Title order={4} className="m-2 mt-4">
          対策
        </Title>
        <Text color="dark" className="mx-2">
          県大会でも長い待機時間が予想されますので、過ごし方を考える必要があります。
        </Text>
        <Text color="dark" className="mx-2">
          組み立て方は自分の好みで良いのですが、以下参考にしてみてください。
        </Text>
        <ul>
          <li>　５分　シューズを履き替える</li>
          <li>　　　　ジャージを着る</li>
          <li>１０分　座る（休む）</li>
          <li>１５分　ジョグ（身体を温める）</li>
          <li>　　　　踏切ドリル(疲れがあれば適当に)</li>
          <li>　　　　順番を確認する</li>
          <li>６人前　スパイクを履く</li>
          <li>　　　　流し</li>
        </ul>
        {/* <Text color="dark" className="mx-2">
          組み立て方は自分の好みで良いのですが、以下参考にしてみてください。
        </Text> */}
        <Text color="dark" className="mx-2">
          休む時は座りたいのですが、小さい大会では椅子が用意してもらえません。その代わり物を持ち込んでも怒られませんので、ストレッチマットか小さい椅子を用意すると良いと思います。
        </Text>
        <Title order={4} className="m-2 mt-4">
          技術課題（七海）
        </Title>
        <Text color="dark" className="mx-2">
          足運びと腕振りが左右にブレています。全力で走る姿を後ろから動画撮影してもらうとわかりやすいと思います。準備運動のドリル練習の時に、練習の効果をよく考え、わからなければ聞いて取り組んでみてください。ランニングフォームの改善が跳躍距離に良い影響を及ぼすと思います。
        </Text>
        <Title order={4} className="m-2 mt-4">
          技術課題（芽生皐）
        </Title>
        <Text color="dark" className="mx-2">
          ジャンプの踏切動作に腕の反動を加えていきたいです。腕だけで身体を持ち上げる練習をしたりして、腕の吊り動作を覚え、全身で踏み切る練習をしてみてください。
        </Text>
        <Text color="dark" className="mx-2">
          疲れると踏切足が曲がり、一歩前の蹴り出しも弱くなります。そこも気を付けてみてください。
        </Text>
        <Title order={4} className="m-2 mt-4">
          最後に
        </Title>
        <Text color="dark" className="mx-2">
          おととしから教室のコーチを始め、初めて教えた年に出会った２人が東部のトップの選手になりとてもうれしいです。火曜日は毎週教室にいますが、違う競技を教えていると思うので、コーチが必要なら声を掛けてください。木曜日は１２月まで御殿場で市町駅伝の練習会があり御殿場の競技場にいます。裾野の陸上教室に参加するようであれば私も出席しますので教えてください。土曜日は毎週練習しているので声を掛けてくれれば一緒にできます。
        </Text>
        <Text color="dark" className="mx-2">
          まずは５m目指してがんばろう！
        </Text>
        {/* <Title order={4} className="m-2 mt-4">
          追伸
        </Title> */}

        <Text color="dark" align="right" className="mx-2">
          2022-9-7 芹澤 勇気
        </Text>
      </LayoutLetter>
    </>
  )
}

export default Plan
