import { Grid } from '@mantine/core'
import { PostCard } from './PostCard'
import { useQueryPosts } from '../hooks/useQueryPosts'

const PostList = () => {
  const { data } = useQueryPosts()
  return (
    <>
      <Grid grow gutter="lg">
        {data?.map((post) => (
          <Grid.Col key={post.id} xs={12} sm={6}>
            <PostCard
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
    </>
  )
}

export default PostList
