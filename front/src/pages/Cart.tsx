import Layout from '@/components/Layout/Layout'
import Basket from '@/components/Ux/Cart/basket'
import { FC } from 'react'

const Cart: FC = () => {
	return (
		<div>
			<Layout title='Cart'>
				<Basket />
			</Layout>
		</div>
	)
}

export default Cart
