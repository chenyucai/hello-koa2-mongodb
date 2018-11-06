import Router from 'koa-router';
import UserController from "../controller/userController";
import verify from '../middleware/verify';

const router = new Router();

router.prefix('/api/user');

router
  .get('/getAll', UserController.getAllUser)
  .post('/saveUser', verify, UserController.saveUser)
  .get('/getUserById', UserController.getUserById)

export default router;