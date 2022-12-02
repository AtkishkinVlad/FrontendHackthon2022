import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

import Layout from '../components/Layouts/layout'
import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const LabGrotesqueKFont = localFont({
  src: [
    {
      path: '../public/fonts/LabGrotesque-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/LabGrotesque-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/LabGrotesqueK-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/LabGrotesqueK-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {


  const CurrentLayout = Component.getLayout || Layout

  return (
    <main className={`${LabGrotesqueKFont.className}`}>
      <CurrentLayout><Component {...pageProps} /></CurrentLayout>)
    </main>
  )
}
