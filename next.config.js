/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "localhost"
            },
            {
                protocol: "https",
                hostname: "images.pexels.com"
            },
            {
                protocol: "https",
                hostname: "next14-starter-murex.vercel.app"
            }
        ]
    }
}

module.exports = nextConfig
