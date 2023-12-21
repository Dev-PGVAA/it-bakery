import '@/styles/aboutUs.css'
import '@/styles/global.css'
import '@/styles/header.css'
import '@/styles/products.css'
import '@/styles/regForm/style.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
