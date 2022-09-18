import type { NextPage } from "next"

import { Anchor, Text, Title } from "@mantine/core"

import { LayoutLetter } from "components/FixedElement/LayoutLetter"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"

const Plan: NextPage = () => {
  return (
    <>
      <LayoutLetter title="手紙">
        <HeaderNavi />
        <Title order={2} align="center" className="mt-10 mb-6">
          芽生皐へ
        </Title>
        <Title order={4} className="m-2">
          はじめに
        </Title>
        <Text className="mx-2">
          中学新人お疲れ様でした。大会では２位、同学年では１番と素晴らしい結果でした。
        </Text>
        <Text className="mx-2">
          教室のコーチを始めて初めてあいさつをした選手が活躍して、自分の事のようにうれしいです。次は県のトップ８を目指してがんばりましょう。
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
          技術課題（芽生皐）
        </Title>
        <Text className="mx-2">
          ジャンプの踏切動作に腕の反動を加えていきたいです。腕だけで身体を持ち上げる練習をしたりして、腕の吊り動作を覚え、全身で踏み切る練習をしてみてください。
        </Text>
        <Text className="mx-2">
          疲れると踏切足が曲がり、一歩前の蹴り出しも弱くなります。そこも気を付けてみてください。
        </Text>
        <Title order={4} className="m-2 mt-4">
          追伸
        </Title>
        {/* <Text className="mx-2">
          火曜日は毎週教室にいますが違う競技を教えていると思うので、必要なら声を掛けてください。
        </Text>
        <Text className="mx-2">
          木曜日は１２月まで御殿場で市町駅伝の練習会があり御殿場の競技場にいますが、連絡をもらえれば裾野の教室にも出席できます。
        </Text>
        <Text className="mx-2">金曜日は教室が開催されていればいます。</Text>
        <Text className="mx-2">
          土曜日は毎週練習しているので競技場であったらよろしく。夜も教室に参加しています。
        </Text> */}
        <Text className="mx-2">
          県大会は審判の出席をしませんが、速報やYouTubeを見て応援しています。がんばってください。
        </Text>
        <Text align="right" className="mx-2 mt-6 mb-20">
          2022-9-7 芹澤 勇気
        </Text>{" "}
        <Title order={4} className="m-2 mt-4">
          三島記録会
        </Title>
        <Text className="mx-2">手紙を渡しそびれてしまったので追記で</Text>
        <Text className="mx-2">
          腰の痛みからか疲れからか、動きが重くなっているように感じました。
        </Text>{" "}
        <Text className="mx-2">
          ２本目が１本目と同じくらい跳べたのは収穫かと思います。３本目は審判の呼び出すタイミングが悪かったですね。注意しておきました。
        </Text>
        <Text className="mx-2">
          リレーの決勝と重なった選手が息を切らしながら３本目を跳んで、比較的好成績を出していました。どのくらいの状態で跳躍するかはそれぞれで難しいですが、そういう選手もいるということを念頭に試技間の時間を組み立ててみてください。
        </Text>
        <Text className="mx-2 mt-2">
          腰の痛みは家族と相談してみてください。　１．整体に行く
          ２．湿布を貼る　３．病院に行って湿布をもらう　おすすめは１＋２かな
        </Text>
        <Anchor href="https://www.sugiyamaseikotu2.com/" className="mx-2">
          いつも行っている杉山接骨院のリンク
        </Anchor>
        <Text className="mx-2">
          整体に行く場合はどこをマッサージするのかよく覚えておくと良いと思います。{" "}
        </Text>
        <Text className="mx-2 mt-2">
          疲れについては、部活の顧問に相談してください。せっかくの県大会なので、大会に向けた調整メニューを組みたいところです。
        </Text>
        <Text className="mx-2">
          全助走で跳ぶのは２本だけと決めるとか、練習量を減らして、強度の強い練習をするのが一般的ですが、先生の指示に従うのが良いと思います。
        </Text>
        <Text className="mx-2">
          が、量が多いと感じる場合は適度に手を抜いて、大事なポイントだけがんばると良いと思います。
        </Text>
        <Anchor href="https://youtu.be/XMrms53l77w" className="mx-2">
          調整メニュー参考動画のリンク
        </Anchor>
        <Text className="mx-2 mt-2">
          試合２日前にも違和感が消えないようなら、キネシオテープを貼ってごまかしましょう。
        </Text>
        <Text className="mx-2 mb-2">
          どこが痛いかによって貼り方は違うけど。杉山接骨院で相談かな
        </Text>
        <Anchor
          href="http://kinesio.kachidoki-chiro.com/index.html/cn14/pg140.html"
          className="mx-2"
        >
          よく痛くなるところのデーピングのリンク
        </Anchor>
        <Text className="mx-2">
          ↓説明のトリガーポイントらへんをほぐすとわりと良くなることも多い
        </Text>
        <Anchor href="https://www.hirakawa-g.jp/8744/" className="mx-2">
          筋肉の説明のリンク
        </Anchor>
        <Text align="right" className="mx-2 mt-6 mb-20">
          2022-9-19
        </Text>{" "}
      </LayoutLetter>
    </>
  )
}

export default Plan
