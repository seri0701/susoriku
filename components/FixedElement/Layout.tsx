import { FC, ReactNode } from "react"
import Head from "next/head"

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = "陸上競技" }) => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content="Qsv-aaCpuXDB2Xem4vIgTXcOco914A7epqBo6qJP9IQ"
        />
      </Head>
      <main className="mx-auto max-w-2xl flex-col items-center px-2">
        {children}
      </main>
    </div>
  )
}
