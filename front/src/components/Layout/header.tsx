import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

const header: FC = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isClass, setIsClass] = useState(false)
	const burger = (event: any) => {
		setIsClass(CurrentStatus => !CurrentStatus)
	}

	return (
		<nav>
			<Image
				className='ava'
				alt='Ava'
				width={50}
				height={50}
				src='/images/mainI.svg'
			/>
			<span id='title'>
				<Link href='/'>IT-Bakery</Link>
			</span>

			<div className='links'>
				<span>
					<Link href='/'>Products </Link>
				</span>
				<span>
					<Link href='/Basket'>Basket</Link>
				</span>
				<span>
					<Link href='/AboutUs'>About Us</Link>
				</span>
				<span>
					<Link href='/LogIn'>Auth</Link>
				</span>
			</div>
			<div className='burger'>
				<div className={isClass ? 'buttons-burger active' : 'buttons-burger'}>
					<Menu color='#e3d5ba' size={17} className='open' onClick={burger} />
					<X color='#e3d5ba' size={17} className='close' onClick={burger} />
				</div>
				<div className={isClass ? 'linksBurger active' : 'linksBurger'}>
					<p>
						<Link href='/'>Products</Link>
					</p>
					<p>
						<Link href='/Basket'>Basket</Link>
					</p>
					<p>
						<Link href='/AboutUs'>About Us</Link>
					</p>
					<p>
						<Link href='/LogIn'>Auth</Link>
					</p>
				</div>
			</div>
		</nav>
	)
}

export default header
