const express = require("express");
const { Message } = require("../util/Constants");
const routeralluser = express.Router();
const fs=require("fs");

routeralluser.post("", (req, res) => {
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

module.exports = {
    routeralluser,
};