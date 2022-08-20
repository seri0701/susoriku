import { FC } from "react"
import { Anchor, Text, useMantineColorScheme } from "@mantine/core"

export const TitleText: FC = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  return (
    <>
      <Anchor href="/" color={dark ? "dimmed" : "dark"}>
        <Text weight={500} sx={{ marginLeft: "3rem" }}>
          Susono Track & Field Club
        </Text>
      </Anchor>
    </>
  )
}
