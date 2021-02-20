const appConfig = require('./config/app.config')
const withPWA = require('next-pwa')
 
const publicRuntimeConfig = {
  ...appConfig
}

require('dotenv').config()

module.exports = withPWA({
  publicRuntimeConfig,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  images: {
    domains: ['spoonacular.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
})
