console.log('-------', process.env.NODE_ENV)

require('babel-register')
require('babel-polyfill')
//set app
const app = require('./src/app')

module.exports = app