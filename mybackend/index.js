import express from 'express';
import cors from 'cors';

// import router from './routes/get-route.js';
// const app = express();
// app.use('/',router);
// app.use('/',router);

// app.use(express.json())
// app.use(cors());


// app.listen(1122,()=>{
//     console.log('server running at port 1122');
// });
//server.js

// import express from 'express';
// import crud_route from './routes/crudRoutes.js';
// import cors from 'cors';
// const app=express();
// app.use(express.json());
// app.use(cors());
// app.use('/',crud_route);
// app.listen(1122,()=>console.log('server started'));

// const express = require('express')
import route from './routes/UserRouter';
const app = express();
app.use(express.json());
app.use('/',route);
app.listen(1122,()=>console.log('db connected'));