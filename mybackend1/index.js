
import express from 'express';
const app = express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("API success");
});
app.post('/add-user',(req,res)=>{
     const data = req.body;
     console.log("REceived data",data);
     res.send("Data added successfully");
});
app.listen(1234,()=>{
    console.log("server running at port:http://localhost:1234");
});