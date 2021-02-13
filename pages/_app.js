import App from 'next/app'
import GlobalStyle from '../styles/global'
import Head from 'next/head'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Cookbook</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}

export default MyApp
