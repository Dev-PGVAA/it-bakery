import Layout from '@/components/Layout/Layout'
import Log from '@/components/Ux/Auth/Log'
import { FC } from 'react'

const LogIn: FC = () => {
	return (
		<>
			<Layout title='Log In'>
				<Log />
			</Layout>
		</>
	)
}

export default LogIn
