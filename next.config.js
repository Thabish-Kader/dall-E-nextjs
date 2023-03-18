/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["miro.medium.com"],
	},
};

module.exports = nextConfig;
