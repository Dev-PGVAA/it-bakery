import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

const getTitle = (title: string) => `${title} | It-Bakery`

const Meta: FC<PropsWithChildren<IMeta>> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				{description ? (
					<>
						<meta name='description' content={description} />
						<meta name='og:title' content={getTitle(title)} />
						<meta name='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
				{children}
			</Head>
		</>
	)
}

export default Meta
