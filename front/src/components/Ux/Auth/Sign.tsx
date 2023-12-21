import { LockKeyholeIcon, Mail, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const Sign: FC = () => {
	return (
		<form method='POST'>
			<section className='sign-up'>
				<div className='container'>
					<div className='signin-content'>
						<div className='signin-form'>
							<h2 className='form-title'>Sign Up</h2>
							<form method='POST' className='register-form' id='login-form'>
								<div className='form-group'>
									<label htmlFor='your_name'>
										<User size={18} />
									</label>
									<input
										type='text'
										name='your_name'
										id='your_name'
										placeholder='Login'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='your_name'>
										<Mail size={18} />
									</label>
									<input
										type='text'
										name='your_name'
										id='your_name'
										placeholder='Mail'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='your_pass'>
										<LockKeyholeIcon size={18} />
									</label>
									<input
										type='password'
										name='your_pass'
										id='your_pass'
										placeholder='Password'
									/>
								</div>
								<div id='dontacc'>
									<Link href='LogIn'>Already have an account?</Link>
								</div>
								<div className='form-group form-button'>
									<input
										type='submit'
										name='signin'
										id='signin'
										className='form-submit'
										value='Sign up'
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</form>
	)
}

export default Sign
