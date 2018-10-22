import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import user from './router/user'
import './dbHelper'
import responseFilter from './middleware/responseFilter'

const app = new Koa()

app.use(bodyParser())

app.use(logger())

app.use(responseFilter())

app.use(user.routes()).use(user.allowedMethods())

export default app