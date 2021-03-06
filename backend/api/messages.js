const express = require("express");
const messageRoute = express.Router();
const path = require("path")
require("dotenv").config({path:'/backend/.env'});
const db = require("../database");
const jwt = require("jsonwebtoken");
const message = db.get("messages");
const nodemailer = require('nodemailer');
const {message:messageSchema} = require('../ValidationScheme/Schema')
const userAuthenticated = require("../tokenAuth/tokenAuth");
messageRoute.post("/", async (req,res)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })
    try {
        let mailOptions = {
            from:process.env.EMAIL,
            to:req.body.email,
            subject:"Carolyn inqueries",
            text:`Hi ${req.body.name}! You messaged us at our website.`
        }
        transporter.sendMail(mailOptions,(err,data)=>{
            if(err){
                console.warn(err);
                return;
            }
            else{
                console.log("EMAIL SENT!");
            }
        })
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