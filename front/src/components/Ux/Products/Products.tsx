import { Plus } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { data } from './Data'

const Products: FC = () => {
	return (
		<div className='products'>
			<div className='container'>
				<Image src={data.image} width={250} height={300} alt={data.imageDesc} />
				<p>{data.Desc}</p>
				<Plus size={24} />
			</div>
		</div>
	)
}

export default Products
