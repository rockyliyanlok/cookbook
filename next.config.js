const appConfig = require('./config/app.config')
const withPWA = require('next-pwa')
 
const publicRuntimeConfig = {
  ...appConfig
}

require('dotenv').config()

module.exports = withPWA({
  publicRuntimeConfig,
  pwa: {
    dest: 'public'
  }
})
