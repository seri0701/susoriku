import { FC, ReactNode } from "react"
import Head from "next/head"

type Props = {
  title: string
  children: ReactNode
}

export const LayoutBlack: FC<Props> = ({ children, title = "陸上競技" }) => {
  return (
    <div className="flex min-h-screen bg-neutral-600">
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
