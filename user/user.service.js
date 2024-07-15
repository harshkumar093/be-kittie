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
    console.log(userdata);
    fs.writeFileSync("./database/users.json",JSON.stringify(userdata));
    res.status(200).json(Message(200, "Success"));
};


function updateuser(res,name){
    const userdata=JSON.parse(fs.readFileSync("./database/users.json"));
    if(!userdata)
    {
        res.status(500).json(Message(500, "users not found.", null));
    }
    let response=userdata.find((item)=>item.name==name);
    console.log(response);
    if (response)
    {
        response.status = response.status.toLowerCase() === 'true' ? 'false' : 'true';
        fs.writeFileSync("./database/users.json",JSON.stringify(userdata));
        res.status(200).json(Message(200,"User Updated",response));
    }
    else
    { 
        res.status(404).json(Message(404,"User not found"));
    }
}


module.exports={
    adduser,
    updateuser,
};