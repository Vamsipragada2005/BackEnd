import task from '../models/ToDoModel.js';
import bcrypt from 'bcrypt';
const add = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    
    const addeddata = await task.insertMany(data);
    console.log(addeddata);
    res.status(201).json("task added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};
const getTaskDetails = async(req, res) => {
    try{
        const mydata = await task.find();
        res.status(200).json(mydata);
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const encryption = async(req,res)=>{
    try{
        const result = await bcrypt.hash(req.body.password,10);
        return res.status(200).json(result);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}


const verifyEncryption = async(req,res)=>{
    try{
        const encode ="$2b$10$4KebiHv7vTzX0D1/0JfFJuUM2HaWA6TdsR5UqwePL3Og77KgHUhBO"
        const verify = await bcrypt.compare(req.body.password,encode);
        return res.status(200).json(verify);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

export {add,getTaskDetails,encryption,verifyEncryption};