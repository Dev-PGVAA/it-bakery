import Layout from '@/components/Layout/Layout'
import Sign from '@/components/Ux/Auth/Sign'
import { FC } from 'react'

const SignUp: FC = () => {
	return (
		<div>
			<Layout title='Sign Up'>
				<Sign />
			</Layout>
		</div>
	)
}

export default SignUp
