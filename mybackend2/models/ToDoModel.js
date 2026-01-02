import mongoose from 'mongoose';
const taskschema = new mongoose.Schema({
    task:{
        type:String
    },
    spendTIme:{
        type:String
    }
});
const task = mongoose.model("task",taskschema);
export default task;