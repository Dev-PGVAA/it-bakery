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
							<h2 className='form-title'>Регистрация</h2>
							<form method='POST' className='register-form' id='login-form'>
								<div className='form-group'>
									<label htmlFor='your_name'>
										<User size={18} />
									</label>
									<input
										type='text'
										name='your_name'
										id='your_name'
										placeholder='Логин'
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
										placeholder='Почта'
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
									<Link href='LogIn'>Уже есть аккаунт?</Link>
								</div>
								<div className='form-group form-button'>
									<input
										type='submit'
										name='signin'
										id='signin'
										className='form-submit'
										value='Зарегистрироваться'
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
