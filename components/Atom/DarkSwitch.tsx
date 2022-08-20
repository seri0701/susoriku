import { FC } from "react"
import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { Sun, MoonStars } from "tabler-icons-react"

export const DarkSwitch: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "dark"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className="mx-3"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  )
}
