/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: isProd ? 'export' : 'standalone',
    images: {
        unoptimized: true,
    },
    basePath: isProd ? '/portfolioweb' : '',
    assetPrefix: isProd ? '/portfolioweb' : '',
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
