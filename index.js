const express=require("express");
const path = require("path");
const { Message } = require("./util/Constants");
const { routeruser } = require("./user/user.controller");


const app=express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/api/user",routeruser);

app.use("/api/",(res,req)=>{
    res.status(200).json(Message(200,"welcome to kitti party"));
});

app.listen(8088,()=>{
    console.log("Server running on port number 8088");
});