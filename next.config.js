/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', //comment out this when publishing to github
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
