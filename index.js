console.log('-------', process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   require('babel-register')
// }
require('babel-register')
require('babel-polyfill')
//set app
const app = process.env.NODE_ENV === 'development'
  ? require('./src/app')
  : require('./dist/app')

module.exports = app