import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

import Layout from '../components/layout'
import '../styles/globals.css'

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

export default function App({ Component, pageProps }: AppProps) {
  return (<main className={`${LabGrotesqueKFont.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
    )
}
