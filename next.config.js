/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination:
					"https://dall-e-nextjs-lzd4tczud-thabish-kader.vercel.app/share",
			},
		];
	},
};

module.exports = nextConfig;
