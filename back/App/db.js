import Pool from 'pg'

const pool = new Pool({
	user: 'postgres',
	password: '161078',
	host: 'localhost',
	port: 5432,
	database: 'itbakery'
})

// module.exports = pool
export default pool