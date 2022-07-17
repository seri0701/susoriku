import { Grid } from '@mantine/core'
import { CustomCard } from 'components/MountUnits/ResultCard'
import { useQueryResults } from 'hooks/useQueryPosts'

const ResultCom = () => {
  const { data } = useQueryResults()
  return (
    <Grid grow gutter="lg">
      {data?.map((post) => (
        <Grid.Col key={post.id} xs={12} sm={6}>
          <CustomCard
            postUrl={
              post.post_url
                ? `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/posts/${post.post_url}`
                : ''
            }
            title={post.title}
            status={post.status}
            content={post.content}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default ResultCom
