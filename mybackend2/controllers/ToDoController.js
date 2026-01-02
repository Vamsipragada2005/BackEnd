import task from '../models/ToDoModel.js';

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
export {add,getTaskDetails};