import express from 'express';
import addSubject from '../Contollers/SubjectController.js';
const router = express.Router();
router.get('/add-subject',addSubject);
export default router;
