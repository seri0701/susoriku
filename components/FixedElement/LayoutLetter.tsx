import { FC, ReactNode } from "react"
import Head from "next/head"
import { useMantineColorScheme } from "@mantine/core"

type Props = {
  title: string
  children: ReactNode
}

export const LayoutLetter: FC<Props> = ({ children, title = "手紙" }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"
  const select = dark
    ? "flex min-h-screen bg-neutral-800"
    : "flex min-h-screen bg-neutral-300"
  return (
    <div className={select}>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="mx-auto max-w-2xl flex-col items-center px-2">
        {children}
      </main>
    </div>
  )
}
