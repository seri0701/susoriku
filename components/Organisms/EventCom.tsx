import { FC } from 'react'
import { Grid } from '@mantine/core'

type Props = {
  EVENT_ITEMS: any
  //    Entry: string
  //    Month: number
  //    Day: number
  //    Event: string
}

export const EventCom: FC<Props> = ({ EVENT_ITEMS }: any) => {
  return (
    <>
      {EVENT_ITEMS.map((item: any) => {
        return (
          <Grid
            key={item.Event}
            sx={{
              borderTop: '1px solid #eaeaea',
            }}
          >
            <Grid.Col span={1}>{item.Entry}</Grid.Col>
            <Grid.Col span={4} className="text-center">
              {item.Month}月{item.Day}日
            </Grid.Col>
            <Grid.Col span={7}>{item.Event}</Grid.Col>
          </Grid>
        )
      })}
    </>
  )
}

export default EventCom
