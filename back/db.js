const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	password: '161078',
	host: 'localhost',
	port: 5432,
	database: 'ItBakery'
})

module.exports = pool
