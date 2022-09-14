import { FC, useState } from "react"
import { Anchor, Burger, Drawer, useMantineTheme } from "@mantine/core"

export const DrawerCom: FC = () => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  return (
    <div>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        // title={title}
        size="sm"
        className="mx-3"
        sx={{
          "@media (min-width: 800px)": {
            display: "none",
          },
        }}
      />
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        // title=""
        padding="xl"
        size="sm"
        className="bg-indigo-900"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.indigo[9]
            : theme.colors.indigo[2]
        }
      >
        <div className="m-3 flex flex-col text-2xl">
          <Anchor
            href="/calender/regular2022"
            weight={700}
            className="my-4 text-white"
          >
            定期練習予定
          </Anchor>
          <Anchor
            href="/event/event2022"
            weight={700}
            className="my-4 text-white"
          >
            年間行事予定
          </Anchor>
          {/* <Anchor
            href="/calender/calender08"
            weight={700}
            className="my-4 text-white"
          >
            ８月練習予定
          </Anchor> */}
          <Anchor
            href="/calender/calender09"
            weight={700}
            className="my-4 text-white"
          >
            ９月練習予定
          </Anchor>
          <Anchor href="/result" weight={700} className="my-4 text-white">
            競技会結果（工事中）
          </Anchor>
          <Anchor href="/plan" weight={700} className="my-4 text-white">
            育成方針
          </Anchor>{" "}
          <Anchor href="/edit" weight={700} className="my-4 text-white">
            記事投稿
          </Anchor>{" "}
          <Anchor href="/note" weight={700} className="my-4 text-white">
            チャットルーム
          </Anchor>
        </div>
      </Drawer>
    </div>
  )
}
