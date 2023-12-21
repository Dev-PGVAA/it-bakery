import Image from 'next/image'
import { FC } from 'react'

const About: FC = () => {
	return (
		<div className='aboutUs'>
			<Image
				src='/images/AboutUs.jpg'
				width={2000}
				height={2000}
				alt='photo bakery'
			/>
			<div className='aboutUs-text'>
				<h1>About Us</h1>
				<br />
				<p>
				IT bakery is a small team of professionals that offers
				Its customers have a wide range of products for cooking.
				</p>
			</div>
		</div>
	)
}

export default About
