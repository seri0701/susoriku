import { FC, ReactNode, useEffect } from "react"
import Head from "next/head"
import { HeaderNavi } from "components/FixedElement/MainHeader/HeaderNavi"
import { HeaderLine } from "components/FixedElement/MainHeader/HeaderLine"
import FooterCom from "components/FixedElement/FooterCom"
import { useRouter } from "next/router"
import { Image } from "@mantine/core"

type Props = {
  title: string
  children: ReactNode
  image: string
}

export const Layout: FC<Props> = ({ children, title = "susono", image }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-auto max-w-5xl flex-col items-center px-2">
        <HeaderNavi />
      </div>
      {router.pathname === "/" ? <HeaderLine /> : null}
      <Image
        // radius="md"
        src={image}
        alt="Random unsplash image"
        fit="contain"
      />
      <div className="flex min-h-screen flex-col">
        <div className="mx-auto  max-w-4xl flex-col items-center px-2">
          <main>{children}</main>
        </div>
        <FooterCom />
      </div>
    </>
  )
}
