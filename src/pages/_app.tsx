import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactNode } from 'react'
import type { MetaProps } from '@layout/meta'
import { Layout } from '@layout/main'
import { Meta } from '@layout/meta'

import '@style/global.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout: ReactNode
  meta: MetaProps
}

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutProvider = Component.layout ?? (Layout as any)
  const metaProps: MetaProps = Component.meta ?? {}

  return (
    <LayoutProvider>
      <Meta {...metaProps} />
      <Component {...pageProps} />
    </LayoutProvider>
  )
}
