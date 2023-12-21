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
				<h1>О нас</h1>
				<br />
				<p>
					IT-пекарня - это маленькая команда профессионалов, которая предлагает
					своим клиентам широкий выбор товаров для приготовления еды.
				</p>
			</div>
		</div>
	)
}

export default About
