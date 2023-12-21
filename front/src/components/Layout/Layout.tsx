import { FC, PropsWithChildren } from 'react'
import Meta from '../Seo/Meta'
import Header from './header'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description,
}) => {
	return (
		<Meta title={title} description={description}>
			<Header />
			{children}
		</Meta>
	)
}

export default Layout
