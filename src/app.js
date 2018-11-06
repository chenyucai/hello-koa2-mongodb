import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import user from './router/user'
import index from './router/index'
import jwtKoa from 'koa-jwt'
import './dbHelper'
import responseFilter from './middleware/responseFilter'
import {jwtConfig} from "./config/index";

const app = new Koa()

app.use(bodyParser())

// app.use(jwtKoa({secret: jwtConfig}).unless({
//   path: [/^\/api\/login/] //数组中的路径不需要通过jwt验证
// }))

app.use(logger())

app.use(responseFilter())

app.use(index.routes()).use(index.allowedMethods())
app.use(user.routes()).use(user.allowedMethods())

export default app