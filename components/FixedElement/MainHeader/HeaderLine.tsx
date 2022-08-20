import { FC } from "react"
import { Grid, Space, Text, Title } from "@mantine/core"
import { BrandTwitter, BrandFacebook, Rss } from "tabler-icons-react"

export const HeaderLine: FC = () => {
  return (
    <div className=" my-0 flex items-center bg-indigo-900 p-12">
      <div className="mx-auto flex">
        <Grid>
          <Grid.Col sm={8} xs={10}>
            <div className=" max-w-2xl flex-col px-2 text-white">
              <Title>Susono Track & Field Club</Title>
              <Text>裾野市陸上教室</Text>
            </div>
          </Grid.Col>
          <Grid.Col sm={2} xs={0}>
            <Space w="xl" className="mx-20" />
          </Grid.Col>
          <Grid.Col sm={2} xs={12}>
            <div className="my-6 flex items-center">
              <BrandTwitter color={"white"} />
              <BrandFacebook color={"white"} />
              <Rss color={"white"} />
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  )
}
