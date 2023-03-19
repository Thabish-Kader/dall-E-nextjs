/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["miro.medium.com", "images.nightcafe.studio"],
	},
};

module.exports = nextConfig;
