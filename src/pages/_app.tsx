import AppHeader from '@/components/AppHeader'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import '@/styles/style.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <AppHeader />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  )
}
