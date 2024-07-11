const fs=require("fs");
const { Message } = require("../util/Constants");



const adduser=(res,nam,id,status)=>{
    const userdata=JSON.parse(fs.readFileSync("./database/users.json"));
    const payload=
    {
        name:nam,
        id:id,
        status:status
    }
    userdata.push(payload);
    fs.writeFile("users.json",JSON.stringify(userdata),()=>{
        console.log("file updated");
    });
    res.status(200).json(Message(200, "Success"));
};

module.exports={
    adduser,
};