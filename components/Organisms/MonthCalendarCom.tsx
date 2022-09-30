import { FC } from "react"
import { Grid, Text } from "@mantine/core"

type Props = {
  CALENDER_ITEMS: any
  // {Day: number
  // Hour: number
  // Minute: number
  // Venue: string}
}

export const MonthCalenderCom: FC<Props> = ({ CALENDER_ITEMS }) => {
  return (
    <>
      {CALENDER_ITEMS.map((item: any) => {
        return (
          <Grid
            key={item.Day}
            sx={{
              borderTop: "1px solid #eaeaea",
            }}
          >
            <Grid.Col span={4} className="text-right">
              {item.Day}日
            </Grid.Col>
            <Grid.Col span={3} className="text-center">
              {item.Venue}
            </Grid.Col>
            <Grid.Col span={4} className="text-left">
              {item.Hour}時{item.Minute}分
            </Grid.Col>
          </Grid>
        )
      })}
      <Text
        sx={{
          borderTop: "1px solid #eaeaea",
          paddingTop: "10px",
          color: "#0251d1",
        }}
      >
        天候等により練習日程が予告なく変更になることがあります。
      </Text>
    </>
  )
}
