/** @type {import('next').NextConfig} */

//Prod mode
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
// // const nextConfig = {
// //     allowedDevOrigins: ['192.168.1.88'],
// //     images: {
// //         unoptimized: true,
// //     }
// // }

// module.exports = nextConfig