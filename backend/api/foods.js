const express = require("express");
const router = express.Router();
const db = require("../database")
const jwt = require("jsonwebtoken")
const userAuthenticated = (req,res,next) =>{
    const accessToken = req.body.token.split(" ")[0]
    jwt.verify(accessToken,process.env.SECRET_TOKEN,(err,user)=>{
        if(err) return res.send(err);
        next();
    })
}
router.get("/",(req,res)=>{
    db.get('foods').find({}).then(result => res.json(result));
});
router.post("/",(req,res)=>{
    db.get('foods').insert(req.body).then(result=>res.send({message:"Data inserted succesfully"}));
})
module.exports = router;