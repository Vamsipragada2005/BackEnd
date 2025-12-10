import express from 'express';
import router from './routers/StudentRouter.js';
const app = express();
app.use(express.json());
app.get('/getStudents',(req,res)=>{
    res.send("api Suceess");
});

app.use('/get-students',router);

app.listen(1234,()=>{
    console.log("sever running at port : 1234");
});
