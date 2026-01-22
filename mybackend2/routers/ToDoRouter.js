import express from 'express';
const router = express.Router();
import{add,encryption,getTaskDetails,verifyEncryption} from '../controllers/ToDoController.js';

router.get('/get-task',getTaskDetails);
router.get('/add-task',add);
router.get('/encrypt-token',encryption);
router.post('/verify-password',verifyEncryption);
export default router;