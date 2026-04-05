/** @type {import('next').NextConfig} */

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
    // Check if the current phase is the production build
    const isProd = phase === PHASE_PRODUCTION_BUILD

    return {
        output: isProd ? 'export' : '',
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

// //Prod mode
// const nextConfig = {
//     output: 'export',
//     images: {
//         unoptimized: true,
//     },
//     basePath: '/portfolioweb',
//     assetPrefix: '/portfolioweb',
//     eslint: {
//         ignoreDuringBuilds: true,
//     },
// }

// // Dev mode
// // const nextConfig = {
// //     allowedDevOrigins: ['192.168.1.88'],
// //     images: {
// //         unoptimized: true,
// //     }
// // }

// module.exports = nextConfig