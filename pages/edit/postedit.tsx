import { ChangeEvent, useState } from "react"
import {
  Container,
  Center,
  Button,
  TextInput,
  Loader,
  Textarea,
  Select,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useQueryClient } from "@tanstack/react-query"

import { Layout } from "../../components/FixedElement/Layout"
import HeaderCom from "components/FixedElement/SubHeader/HeaderCom"
import FooterCom from "components/FixedElement/FooterCom"
import { Post } from "../../types"
import { supabase } from "../../utils/supabase"
import PostListCom from "components/Organisms/PostListCom"
import { AuthCom } from "hooks/auth/authCom"
import { LogoutButton } from "components/Atom/LogoutButton"

const PostEdit = () => {
  const queryClient = useQueryClient()
  const [isLoading, setIsLoading] = useState(false)
  const [postUrl, setPostUrl] = useState("")
  const form = useForm<Omit<Post, "id" | "created_at" | "post_url">>({
    initialValues: {
      title: "",
      content: "",
      status: "",
    },
  })
  const uploadPostImg = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      throw new Error("Please select the image file")
    }
    const file = e.target.files[0]
    const fileExt = file.name.split(".").pop()
    const fileName = `${Math.random()}.${fileExt}`
    setIsLoading(true)
    const { error } = await supabase.storage
      .from("posts")
      .upload(fileName, file)
    if (error) throw new Error(error.message)
    setPostUrl(fileName)
    setIsLoading(false)
  }
  const handleSubmit = async () => {
    setIsLoading(true)
    const { data, error } = await supabase.from("posts").insert({
      title: form.values.title,
      content: form.values.content,
      status: form.values.status,
      post_url: postUrl,
    })
    if (error) throw new Error(error.message)
    const cachedPosts = queryClient.getQueryData<Post[]>(["posts"])
    if (cachedPosts) {
      queryClient.setQueryData(["posts"], [...cachedPosts, data[0]])
    }
    setIsLoading(false)
    setPostUrl("")
    form.reset()
  }
  return (
    <>
      <AuthCom>
        <Layout title="PostEdit">
          <HeaderCom Caption="お知らせ記事投稿" Color="brown" />
          <Container className="w-96">
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <TextInput
                mb="md"
                label="Title*"
                placeholder="New title"
                {...form.getInputProps("title")}
                required
              />
              <Textarea
                mb="md"
                minRows={6}
                placeholder="New content"
                label="Description*"
                required
                {...form.getInputProps("content")}
              />
              <Select
                label="Status*"
                data={["New", "PickUp", "Hot"]}
                required
                {...form.getInputProps("status")}
              />
              <Center>{isLoading && <Loader my="xl" />}</Center>
              <Center>
                <input
                  className="hidden"
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={(e) => uploadPostImg(e)}
                />
              </Center>
              <Center>
                <Button mb="xl" type="submit" className="mt-5">
                  投稿ボタン
                </Button>
              </Center>
            </form>
          </Container>
          <PostListCom />
          <LogoutButton />
        </Layout>
        <FooterCom />
      </AuthCom>
    </>
  )
}

export default PostEdit
