const express = require('express')
const app = express()

const getRequests = () => {
	app.get('/api*', (req, res) => {
		console.log('GET: '.yellow.bold, req.originalUrl)
		res.send(404)
	})
}

module.exports = getRequests()