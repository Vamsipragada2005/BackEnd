import express from 'express';
import {TestingApi,funn} from '../controllers/get-con.js';
const router = express.Router();
router.get('/get_api',TestingApi);
router.get('/get_fun',funn);
export default router;
