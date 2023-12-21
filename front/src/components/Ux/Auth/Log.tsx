import { LockKeyholeIcon, User } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const Log: FC = () => {
	return (
		<form method='GET'>
			<section className='log-in'>
				<div className='container'>
					<div className='signin-content'>
						<div className='signin-form'>
							<h2 className='form-title'>Вход</h2>
							<form method='GET' className='register-form' id='login-form'>
								<div className='form-group'>
									<label htmlFor='your_name'>
										<User size={18} />
									</label>
									<input
										type='text'
										name='Login'
										id='your_name'
										placeholder='Почта / Логин' // 'E-mail / Login'
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
										placeholder='Пароль'
									/>
								</div>
								<div className='form-group'>
									<input
										type='checkbox'
										name='remember-me'
										id='remember-me'
										className='agree-term'
									/>
								</div>
								<div id='dontacc'>
									<Link href='/SignUp'>Нет аккаунта?</Link>
								</div>
								<div className='form-group form-button'>
									<input
										type='submit'
										name='login'
										id='signin'
										className='form-submit'
										value='Войти'
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

export default Log
