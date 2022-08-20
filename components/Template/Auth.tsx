import { useState } from "react"
//バリデーション用Yup
import * as Yup from "yup"
import { ExclamationCircleIcon } from "@heroicons/react/outline"
import { useForm, yupResolver } from "@mantine/form"
import {
  Anchor,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from "@mantine/core"
import { Login } from "tabler-icons-react"
import { supabase } from "../../utils/supabase"
import { Layout } from "../FixedElement/Layout"
import { Form } from "../../types"
import HeaderCom from "../FixedElement/SubHeader/HeaderCom"

//バリデーションのロジック
const schema = Yup.object().shape({
  //emailはstringなのでYup.string()を使う
  email: Yup.string()
    .email("メールアドレスの形式で入力してください:Invalid email")
    .required("メールアドレスは必須です:No email provided"),
  password: Yup.string()
    .required("パスワードは必須です:No password provided")
    .min(8, "8文字以上で入力してください:Password is too short")
    .matches(
      /[a-z]+/,
      "小文字を含めてください:Password must contain at least one lowercase letter"
    )
    .matches(
      /[A-Z]+/,
      "大文字を含めてください:Password must contain at least one uppercase letter"
    ),
})

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState("")
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: "",
      password: "",
    },
  })
  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
    }
  }
  return (
    <Layout title="Auth">
      <HeaderCom Color="gray" Caption="記事を投稿する？ &rarr;" />
      <Group direction="column" position="center">
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="アカウントかパスが違います"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="email"
            label="Email*"
            placeholder="example@gmail.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mt="md"
            id="password"
            placeholder="password"
            label="Password*"
            description="大文字 + 小文字"
            {...form.getInputProps("password")}
          />
          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister)
                setError("")
              }}
              size="sm"
            >
              {isRegister ? "ログイン画面へ" : "アカウント登録へ"}
            </Anchor>
            <Button color="gray" type="submit" leftIcon={<Login />}>
              {isRegister ? "登録する" : "Login"}
            </Button>
          </Group>
        </form>
      </Group>
    </Layout>
  )
}
//test Password&
