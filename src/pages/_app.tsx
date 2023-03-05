import AppHeader from '@/components/AppHeader'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import '@/styles/style.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
