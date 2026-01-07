import express from 'express';
import {get_data,post_data,update_data,delete_data} from '../controllers/crudController.js';
const route=express.Router();
route.get('/get-data',get_data);
route.post('/post-data',post_data);
route.put('/update-data/:id',update_data);
route.delete('/delete-data/:id',delete_data);
export default route;