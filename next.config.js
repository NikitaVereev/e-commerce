/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['image.api.playstation.com', 'gmedia.playstation.com']
	}
}

module.exports = nextConfig
