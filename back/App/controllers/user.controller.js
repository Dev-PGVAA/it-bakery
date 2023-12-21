const db = require('../db')

class UserController {
	async createUser(req, res) {
		const { email, login, password } = req.body
		const newPerson = await db.query(
			'INSERT INTO person	(email, login, password) values ($1, $2, $3) RETURNING *',
			[email, login, password]
		)
		console.log(
			`\x1b[32m\x1b[1mNew person:\x1b[0m ${email}, ${login}, ${password}.`
		)
		res.json(newPerson.rows[0])
	}
	async getUsers(req, res) {
		const users = await db.query('SELECT * FROM person')
		res.json(users.rows)
	}
	async getOneUser(req, res) {
		const id = req.params.id
		const user = await db.query('SELECT * FROM person where id = $1', [id])
		res.json(user.rows[0])
	}
	async updateUser(req, res) {
		const { id, email, login, password } = req.body
		const user = await db.query(
			'UPDATE person set email = $1, login = $2, password = $3 where id = $4 RETURNING *',
			[email, login, password, id]
		)
		res.json(user.rows[0])
	}
	async deleteUser(req, res) {
		const id = req.params.id
		const user = await db.query('DELETE FROM person where id = $1', [id])
		res.json(user.rows[0])
	}
}

module.exports = new UserController()
