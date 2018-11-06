import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import {jwtConfig} from "../config/index";
import verify from '../middleware/verify';

const router = new Router();

router
  .get('/', async (ctx, next) => {
    ctx.body = 'hello koa2'
  })
  .get('/api/login', async (ctx, next) => {
    let userToken = {
      name: 'nicchan'
    };
    //token签名 有效期为1小时
    const token = jwt.sign(userToken, jwtConfig.secret, {expiresIn: '3h'});
    ctx.body = {
      token
    }
  })
  .get('/api/test/jwt', verify, async (ctx, next) => {
    ctx.body = 'token available'
  });

export default router;