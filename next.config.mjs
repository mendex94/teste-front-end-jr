/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "app.econverse.com.br",
			},
		],
	},
};

export default nextConfig;
