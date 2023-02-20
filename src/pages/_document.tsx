import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en_US'>
      <Head>
        <meta httpEquiv='content-language' content='en' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#6798ff' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
