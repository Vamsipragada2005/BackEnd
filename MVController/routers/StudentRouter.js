import express from 'express';
import getStudents from '../Controllers/StudentController.js';
const router = express.Router();
router.get('/get-students',getStudents);
export default router;