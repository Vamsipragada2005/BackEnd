import express from 'express';
import router from './routers/SubjectRouter.js';
const app = express();
app.use(express.json());
app.post('/addSubject',(req,res)=>{
    res.send("API CALLED");
});

app.use('/add-subject',router);

app.listen(12345,()=>{
    console.log("server running at port :12345");
});