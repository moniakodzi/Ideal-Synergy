import userController from './controllers/User.js';
import { Router } from 'express';
const router = Router();

router.get('/api/user', userController.getUser)
router.post('/api/user',userController.postUser)
router.put('/api/user', userController.putUser)
router.patch('/api/user', userController.patchUser)
router.delete('/api/user', userController.deleteUser)


export default router