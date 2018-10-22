import mongoose from 'mongoose'
import {DB_URL} from "../config/index";

mongoose.Promise = require('bluebird');

// 连接
mongoose.connect(DB_URL, {
  useNewUrlParser: true
});

// 连接成功
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ', DB_URL);
});

// 连接异常
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

// 断开连接
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

export default mongoose