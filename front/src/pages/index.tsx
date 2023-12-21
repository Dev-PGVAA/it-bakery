import Header from '@/components/Layout/header'
import Products from '@/components/Ux/Products/Products'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<link rel='favicon' type='image/x-icon' href='/favicon.ico' />
				<title>IT-bakery</title>
			</Head>
			<Header />
			<Products />
		</>
	)
}
