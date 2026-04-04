/** @type {import('next').NextConfig} */


const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    // Check if the current phase is the development build
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            output: 'standalone',
            images: {
                unoptimized: true,
            },
        }
    }

    // Config options for all phases except development
    return {
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
}
