const express=require("express");
const { Message } = require("../util/Constants");
const { adduser } = require("./adduser.service");
const routeradduser=express.Router();



routeradduser.post("",(req,res)=>{
    try{
        console.log(req.query, req.body);
        const {name}=req.query;
        const { id,status }=req.body;
        console.log(name,id,status);
        adduser(res,name,id,status);
    } catch(error) {
        console.log(error); 
        res.status(500).json(Message(500, "Internal Server Error", error));
    }
});


module.exports=
{
    routeradduser,
};