import express from 'express';
import getusers from './routers/StudentRouter.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());


app.use('/',getusers);

app.listen(1234,()=>{
    console.log("sever running at port : 1234");
});
