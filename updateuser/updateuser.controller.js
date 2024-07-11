const express=require("express");
const { Message } = require("../util/Constants");
const routerupdateuser =express.Router();

routerupdateuser.patch("",(req,res)=>{
    try{
        const {name}=req.query;
        updateuser(res,name);
    }catch(error){
        console.log(error);
        res.status(500).json(Message(500,"Internal Server Error"));
    }
})

module.exports={
    routerupdateuser,
};