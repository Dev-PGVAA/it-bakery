import 'colors/lib/index.js'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

dotenv.config()

const app = express()

async function main() {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	app.use(express.json())

	const PORT = process.env.PORT || 5000
	app.get('/', (req, res) => {
		res.sendfile('./Server.start.html')
	})

	app.listen(
		PORT,
		console.log(
			'\x1Bc',
			'\n\nBACK'.green.bold,
			'v0.0.5: '.green,
			'\n',
			' ➜'.green.bold,
			' Local: '.white,
			'http://localhost:'.cyan + 
			`${PORT}`.cyan.bold + 
			'/'.cyan + 
			'\n'
		)
	)
}

main()
