const express=require("express");
const { Message } = require("../util/Constants");
const { adduser, updateuser } = require("./user.service");
const routeruser=express.Router();
const fs=require("fs");


routeruser.post("",(req,res)=>{
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


routeruser.patch("",(req,res)=>{
    try{
        const {name}=req.query;
        updateuser(res,name);
    }catch(error){
        console.log(error);
        res.status(500).json(Message(500,"Internal Server Error"));
    }
});


routeruser.get("", (req, res) => {
    try {
        const userdata = JSON.parse(fs.readFileSync("./database/users.json"));
        if (!userdata) {
            res.status(500).json(Message(500,"Users database not found."));
        }
        res.status(200).json(Message(200,"Users retrieved successfully.",userdata));
    } catch (error) {
        console.log(error);
        res.status(500).json(Message(500, "Internal Server Error"));
    }
});


module.exports=
{
    routeruser,
};
