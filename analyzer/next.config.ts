import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: '/analyzer',
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
