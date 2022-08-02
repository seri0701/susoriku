import { useQuery } from '@tanstack/react-query'
import { supabase } from '../utils/supabase'
import { Post } from '../types'

export const useQueryPosts = () => {
  const getPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
}
export const useQueryResults = () => {
  const getResults = async () => {
    const { data, error } = await supabase
      .from('results')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) {
      throw new Error(error.message)
    }
    return data
  }
  return useQuery<Post[]>({
    queryKey: ['results'],
    queryFn: getResults,
  })
}
