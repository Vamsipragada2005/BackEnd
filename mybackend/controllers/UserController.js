const express = require('express')

const UserInfo = require('../models/UserModel')

const AddData = async(req,res) =>{
    try{
        if(!req.name ||!req.mobile||req.age||req.sex){
            console.log("all fields are required")
        }else{
        const Result = await UserInfo.create(req.body);
        }
        console.log(result)
        return res.status(200).json("Data added")
    }
    catch(err){
        console.log(err)
        return res.status(200).json("Data not added")

    }
}

exports.AddData = AddData;