import express from 'express';
const router = express.Router();
import{add,getTaskDetails} from '../controllers/ToDoController.js';

router.get('/get-task',getTaskDetails);
router.get('/add-task',add);

export default router;