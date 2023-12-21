import 'colors/lib/index.js'
import express from 'express'

const app = express()
const router = express.Router();
const PORT = 3000

app.listen(PORT)
router.get('http://localhost:3000/api', () => {
	console.log(`App listening on port ${PORT}`.yellow)
})