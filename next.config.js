/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export', //comment out this when publishing to github
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

module.exports = nextConfig

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