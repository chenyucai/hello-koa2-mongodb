import ApiErrorNames from "./ApiErrorNames";

// /**
//  * 自定义API异常处理
//  */
// class ApiError extends Error {
//
//   constructor(name) {
//     super();
//     let errorInfo = ApiErrorNames.getErrorInfo(name);
//
//     this.code = errorInfo.code;
//     this.message = errorInfo.message;
//   }
// }

/**
 * 为什么不用class，因为用了babel，class会被编译成es5，导致instanceof没用
 * @param name
 * @constructor
 */
function ApiError(name) {
  Error.call(this);

  let errorInfo = ApiErrorNames.getErrorInfo(name);
  this.code = errorInfo.code;
  this.message = errorInfo.message;
}

ApiError.prototype = Object.create(Error.prototype)

export default ApiError