import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
