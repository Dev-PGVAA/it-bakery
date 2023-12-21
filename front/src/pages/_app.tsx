import '@/styles/404.scss'
import '@/styles/aboutUs.scss'
import '@/styles/global.css'
import '@/styles/header.scss'
import '@/styles/products.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
