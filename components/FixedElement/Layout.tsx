import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = '陸上競技' }) => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className="mx-auto min-h-screen max-w-2xl flex-col items-center px-2">
        {/* mx-auto flex min-h-screen max-w-2xl flex-col items-center px-2 */}
        {children}
      </main>
      <footer></footer>
    </div>
  )
}
