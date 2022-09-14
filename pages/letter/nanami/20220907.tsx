import type { NextPage } from "next"

import { Text, Title } from "@mantine/core"

import { LayoutLetter } from "components/FixedElement/LayoutLetter"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Plan: NextPage = () => {
  return (
    <>
      <LayoutLetter title="手紙">
        <HeaderNavi />
        <Title order={2} align="center" className="mt-10 mb-6">
          七海へ
        </Title>
        <Title order={4} className="m-2">
          はじめに
        </Title>
        <Text className="mx-2">
          中学新人お疲れ様でした。大会では優勝争いをするまでになり、東部の同世代を牽引するトップアスリートになりました。
        </Text>
        <Text className="mx-2">
          教室のコーチを始め、初めて教えた年に出会った選手が東部のトップの選手になり、自分の事のようにうれしいです。次は県のトップ８を目指してがんばりましょう。
        </Text>
        <Title order={4} className="m-2 mt-4">
          県大会に向けて
        </Title>
        <Title order={5} className="m-2">
          分析
        </Title>
        <Text className="mx-2">
          今大会では１本目から３本目にかけて記録が低下しました。その後決勝では記録が向上したように記憶しています。
        </Text>
        <Text className="mx-2">
          予選では跳躍までに２５分程待機時間がありましたが、この時間、直立不動で待機をしていましたので、疲労のある中動かないことで冷えも加わり全身の筋肉が固まることで、パフォーマンスが低下したものと思われます。
        </Text>
        <Title order={4} className="m-2 mt-4">
          対策
        </Title>
        <Text className="mx-2">
          県大会でも２０分程度の待機時間が予想されるうえに、１０月は気温が下がりますので、今以上に過ごし方を考える必要があります。
        </Text>
        <Text className="mx-2">
          組み立て方は自分の好みで良いのですが、以下参考にしてみてください。
        </Text>
        <Text className="mx-2">
          試技間の時間は出場選手数と審判により変わります。各試技の時間を確認して組み立てをしてください。
        </Text>
        <Text className="mx-2">
          身体を動かす場所は不安なら慣れている２年生と同じ場所でやれば良いです。七海と芽生皐で相談しても良いと思います。
        </Text>
        <ul>
          <li>　０分</li>
          <div>　　シューズを履き替える</div>
          <div>　　ジャージを着る</div>
          <li>　５分</li>
          <div>　　座る（休む）</div>
          <li>１０分（以下から好きなものを選ぶ）</li>
          <div>　　踏切ドリル</div>
          <div>　　疲れていればジョグで身体を温めるだけ</div>
          <div>　　順番を確認する</div>
          <div>　　体操や動的なストレッチ</div>
          <li>５か６人前　スパイクを履く</li>
          <div>　　ジャージを脱ぐ</div>
          <div>　　流し</div>
        </ul>
        <Text className="mx-2">
          決勝はスパイクは履いたままで、ジャージを着て休むだけで良いと思います。
        </Text>
        <Text className="mx-2">
          休む時は座りたいのですが、小さい大会では椅子が用意してもらえません。その代わり物を持ち込んでも怒られませんので、ストレッチマットか小さい椅子を用意すると良いと思います。気が引けるようなら小さな座布団か大きなタオルを敷いて、お尻を冷やさないようにしてください。
        </Text>
        <Title order={4} className="m-2 mt-4">
          技術課題（七海）
        </Title>
        <Text className="mx-2">
          足運びと腕振りが左右にブレています。普段から準備運動のドリル練習は一つひとつ、何を狙って行うのかよく考え、わからなければ聞いて取り組んでみてください。ランニングフォームの改善すれば、助走速度が上り、跳び出しもよくなって、５mはすぐだと思います。
        </Text>
        <Title order={4} className="m-2 mt-4">
          YOSHIKO先生へ
        </Title>
        <Text className="mx-2">
          足が外側に開き、腕振りの脇が開いて肩甲骨の可動が少ない感じがあったので、動画撮影の際に真正面や真後ろからも撮影してみてあげると良いかもしれません。
        </Text>
        <Text className="mx-2">
          大会時は試技順を確認するのが割と面倒で、スパイクを履くタイミングを教えてもらえると選手的に嬉しいです。大会中声掛けが出来そうな雰囲気か等確認して、時間管理について声掛けがいるか本人と相談してみてください。
        </Text>
        <Title order={4} className="m-2 mt-4">
          追伸
        </Title>
        <Text className="mx-2">
          火曜日は毎週教室にいますが違う競技を教えていると思うので、必要なら声を掛けてください。
        </Text>
        <Text className="mx-2">
          木曜日は１２月まで御殿場で市町駅伝の練習会があり御殿場の競技場にいますが、連絡をもらえれば裾野の教室にも出席できます。
        </Text>
        <Text className="mx-2">金曜日は教室が開催されていればいます。</Text>
        <Text className="mx-2">
          土曜日は毎週練習しているので競技場であったらよろしく。夜も教室に参加しています。
        </Text>
        <Text className="mx-2">
          県大会は審判の出席をしませんが、速報やYouTubeを見て応援しています。がんばってください。
        </Text>

        <Text align="right" className="mx-2 mt-6 mb-20">
          2022-9-7 芹澤 勇気
        </Text>
      </LayoutLetter>
    </>
  )
}

export default Plan
