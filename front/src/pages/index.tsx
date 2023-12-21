import Header from '@/components/Layout/header'
import Products from '@/components/Ux/Products/Products'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Header />
			<Products />
		</>
	)
}
