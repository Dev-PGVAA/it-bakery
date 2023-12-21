/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:5000/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:5000/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
