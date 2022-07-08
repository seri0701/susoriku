import { FC } from 'react'
import { Grid } from '@mantine/core'

type Props = {
  CALENDER_ITEMS: any
  //    Day: number
  //    Hour: number
  //    Minute: number
  //    Venue: string
}

export const CalenderCom: FC<Props> = ({ CALENDER_ITEMS }) => {
  return (
    <>
      {CALENDER_ITEMS.map((item: any) => {
        return (
          <Grid key={item.Day}>
            <Grid.Col span={3} className="text-right">
              {item.Day}日
            </Grid.Col>
            <Grid.Col span={5} className="text-center">
              {item.Hour}時{item.Minute}分
            </Grid.Col>
            <Grid.Col span={4}>{item.Venue}</Grid.Col>
          </Grid>
        )
      })}
    </>
  )
}

export default CalenderCom
