/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

// Prod mode
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/portfolioweb',
    assetPrefix: '/portfolioweb',
    eslint: {
        ignoreDuringBuilds: true,
    },
}
// // Dev mode
// const nextConfig = {
//     output: 'standalone',
//     images: {
//         unoptimized: true,
//     },
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// }

module.exports = nextConfig


// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

// // Goback to old config file format as github doesn't seem to like this one

// module.exports = (phase, { defaultConfig }) => {
//     // Check if the current phase is the development build
//     if (phase === PHASE_DEVELOPMENT_SERVER) {
//         return {
//             output: 'standalone',
//             images: {
//                 unoptimized: true,
//             },
//         }
//     }

//     // Config options for all phases except development
//     return {
//         output: 'export',
//         images: {
//             unoptimized: true,
//         },
//         basePath: '/portfolioweb',
//         assetPrefix: '/portfolioweb',
//         eslint: {
//             ignoreDuringBuilds: true,
//         },
//     }
// }
