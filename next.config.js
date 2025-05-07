/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*", // Allow images from all domains
            },
        ],
    },
};

module.exports = nextConfig;
