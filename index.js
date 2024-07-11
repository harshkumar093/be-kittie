const express=require("express");
const path = require("path");
const { routeradduser } = require("./adduser/adduser.controller");
const { routerupdateuser } = require("./updateuser/updateuser.controller");
const { routeralluser } = require("./alluser/alluser.controller");
const { Message } = require("./util/Constants");


const app=express();

app.use("/", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/api/adduser",routeradduser);
app.use("/api/updateuser",routerupdateuser);
app.use("/api/alluser",routeralluser);

app.use("/api/",(res,req)=>{
    res.status(200).json(Message(200,"welcome to kitti party"));
});

app.listen(8088,()=>{
    console.log("Server running on port number 8088");
});