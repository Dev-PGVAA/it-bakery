import { LockKeyholeIcon, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const Log: FC = () => {
	return (
		<section className='log-in'>
			<div className='container'>
				<div className='signin-content'>
					<div className='signin-form'>
						<h2 className='form-title'>Log In</h2>
						<form method='GET' className='register-form' id='login-form'>
							<div className='form-group'>
								<label htmlFor='your_name'>
									<User size={18} />
								</label>
								<input
									type='text'
									name='Login'
									id='your_name'
									placeholder='E-mail / Login'
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='your_pass'>
									<LockKeyholeIcon size={18} />
								</label>
								<input
									type='password'
									name='Password'
									id='your_pass'
									placeholder='Password'
								/>
							</div>
							<div id='dontacc'>
								<Link href='/SignUp'>Don`t have an account?</Link>
							</div>
							<div className='form-group form-button'>
								<button 
									type='submit'
									id='signin'
									className='form-submit'>Log In</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Log
