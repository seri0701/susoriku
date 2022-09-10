import Document, { Head, Html, Main, NextScript } from "next/document"
import { createGetInitialProps } from "@mantine/next"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head />
        <meta
          name="google-site-verification"
          content="Qsv-aaCpuXDB2Xem4vIgTXcOco914A7epqBo6qJP9IQ"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
