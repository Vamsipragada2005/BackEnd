import express from 'express';
import router from './routes/get-route.js';
const app = express();

// app.get('/get-data',(req,res)=>{
//     console.log("Responding...")
// })
app.use('/',router);
app.use('/',router);

app.listen(1122,()=>{
    console.log('server running at port 1122');
});