const mongoose = require('mongoose');
const UserInfo = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    mobile:{
        type:Number,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    sex:{
        type : String,
        required : true
    }

    
})
model.exports = mongoose.model("Users",UserInfo);