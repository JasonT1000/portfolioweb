/** @type {import('next').NextConfig} */

// const isProd = process.env.NODE_ENV === 'production'

// const nextConfig = {
//     output: isProd ? 'export' : 'standalone',
//     images: {
//         unoptimized: true,
//     },
//     basePath: isProd ? '/portfolioweb' : '',
//     assetPrefix: isProd ? '/portfolioweb' : '',
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// }

// module.exports = nextConfig

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
    // Check if the current phase is the production build
    const isProd = phase === PHASE_PRODUCTION_BUILD

    return {
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
}

