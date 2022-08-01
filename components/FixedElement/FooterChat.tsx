import type { NextPage } from 'next'
import { Grid } from '@mantine/core'
import { LoginButton } from 'components/Atom/LoginButton'
import { TopButton } from 'components/Atom/TopButton'

const FooterChat: NextPage = () => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <LoginButton />
      </Grid.Col>
      <Grid.Col span={6}>
        <TopButton />
      </Grid.Col>
    </Grid>
  )
}

export default FooterChat
