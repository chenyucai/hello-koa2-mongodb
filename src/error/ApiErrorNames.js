const ApiErrorNames = {
  UnknownError: {code: -1, message: '未知错误'},
  UserNotExist: {code: 1001, message: '用户不存在'},
  UserNameNotNull: {code: 1002, message: '用户名不能为空'}
};

ApiErrorNames.getErrorInfo = (errorInfo) => {

  // 如果没有对应的错误信息，默认'未知错误'
  if (!errorInfo) {
    errorInfo = ApiErrorNames.UnknownError;
  }

  return errorInfo;
};

export default ApiErrorNames;