import { FC } from "react"
import { Anchor, useMantineColorScheme } from "@mantine/core"

type Props = {
  Href: string
  Label: string
}

export const NaviItem: FC<Props> = ({ Href, Label }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  return (
    <Anchor
      href={Href}
      className=" m-3 "
      weight={500}
      color={dark ? "dimmed" : "dark"}
      sx={{
        "@media (max-width: 800px)": {
          display: "none",
        },
      }}
    >
      {Label}
    </Anchor>
  )
}
