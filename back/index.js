require('colors')
const express = require('express')
const userRouter = require('./routes/user.routes')
// const getRequests = require('./controllers/get.controller')

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
	res.sendfile('./server.start.html')
})
app.use(express.json())
app.use('/api', userRouter)

app.listen(
	PORT,
	app.get('/', (req, res) => {
		res.sendfile('./server.start.html',)
	}),
	app.get('/api/:path*', (req, res) => {
		console.log('GET: '.yellow.bold, req.originalUrl)
		res.send(404)
	}),
	console.log(
		'\x1Bc',
		'\n\nBACK'.green.bold,
		'v0.0.8: '.green,
		'\n',
		' ➜'.green.bold,
		' Local: '.white,
		'http://localhost:'.cyan + 
		`${PORT}`.cyan.bold + 
		'/'.cyan + 
		'\n'
	)
)