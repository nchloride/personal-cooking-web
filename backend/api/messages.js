const express = require("express");
const messageRoute = express.Router();
const db = require("../database");
const jwt = require("jsonwebtoken");
const message = db.get("messages");
const userAuthenticated = require("../tokenAuth/tokenAuth");
messageRoute.post("/", async (req,res)=>{
    message.insert(req.body).then(result=>res.send({message:"Message successfully sent!"}));
})
messageRoute.get('/',userAuthenticated,(req,res)=>{
    message.find({}).then(result=>res.json(result));
})


module.exports = messageRoute;