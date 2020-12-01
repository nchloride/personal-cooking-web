const express = require("express");
const messageRoute = express.Router();
const db = require("../database");
const jwt = require("jsonwebtoken");
const message = db.get("messages");
const {message:messageSchema} = require('../ValidationScheme/Schema')
const userAuthenticated = require("../tokenAuth/tokenAuth");
messageRoute.post("/", async (req,res)=>{
    try {
        const validatedMessage = await messageSchema.validateAsync(req.body);
        const inserted = await message.insert(validatedMessage);
        res.send({message:"Message Successfully sent!",data:inserted});
    } catch (error) {
        res.statusCode=500;
        res.json(error);
    }
  
})
messageRoute.get('/',userAuthenticated,(req,res)=>{
    message.find({}).then(result=>res.json(result));
})
messageRoute.delete("/:_id",userAuthenticated,(req,res)=>{
    const {_id} = req.params;
    message.findOneAndDelete({_id})
    .then(result=>res.json(result));
})


module.exports = messageRoute;