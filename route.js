import userController from './controllers/ExampleUser.js';
import { Router } from 'express';
import exampleDataController from './controllers/ExampleCollection.js';
const router = Router();

router.get('/api/example-user', userController.getExampleUser)
router.post('/api/example-user',userController.postExampleUser)
router.put('/api/example-user', userController.putExampleUser)
router.patch('/api/example-user', userController.patchExampleUser)
router.delete('/api/example-user', userController.deleteExampleUser)
router.get('/api/mongo-data', exampleDataController.getExampleData)

export default router