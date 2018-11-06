import ApiError from "../error/ApiError";

/**
 * 返回体拦截器
 */
const responseFilter = () => {
  return async (ctx, next) => {
    console.log(ctx.status)
    try {
      await next();
      responseFormatter(ctx)
    } catch (error) {
      // 如果异常类型是自定义API异常
      if (error instanceof ApiError) {
        ctx.status = 200;
        ctx.body = {
          code: error.code,
          message: error.message
        }
      } else {
        throw error;
      }
    }
  }
};

const responseFormatter = (ctx) => {
  if (ctx.body) {
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: ctx.body
    }
  } else {
    ctx.body = {
      code: 0,
      message: '请求成功'
    }
  }
};

export default responseFilter;
