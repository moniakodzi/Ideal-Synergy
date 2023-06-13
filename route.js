import userController from './controllers/ExampleUser.js';
import { Router } from 'express';
const router = Router();

router.get('/example-user', userController.getExampleUser)
router.post('/example-user',userController.postExampleUser)
router.put('/example-user', userController.putExampleUser)
router.patch('/example-user', userController.patchExampleUser)
router.delete('/example-user', userController.deleteExampleUser)

export default router