const express = require("express");
const router = express.Router();
const db = require("../database")
const userAuthenticated = require("../tokenAuth/tokenAuth");

router.get("/:name?",(req,res)=>{
    const {name} =req.params;
    if(name) return db.get('foods').findOne({name}).then(result => res.json(result));
    db.get('foods').find({}).then(result => res.json(result));
});
router.post("/",userAuthenticated,(req,res)=>{
    db.get("foods").findOne({name:req.body.name}).then(doc=>{
        if(!doc)  db.get('foods').insert(req.body).then(result=>res.send({message:"Data inserted succesfully",successful:true}));
        else{
            res.send({message:'Food name already taken!',successful:false}).status(500)
        }
    })
    
})
router.put("/",userAuthenticated,(req,res)=>{
    const foodID = req.body._id
    const {name,type,description,ingredients,recipe,featured,picture} = req.body
    db.get('foods').findOneAndUpdate({_id:foodID},
        {$set:{name,type,description,ingredients,recipe,featured,picture}})
            .then(result => res.send({message:'Data updated successfully'}))
})
router.delete("/:id",userAuthenticated,(req,res)=>{
    const {id} = req.params;
    db.get('foods').findOneAndDelete({_id:id}).then(result => res.send({message:"Data deleted successfully!"}))

})
module.exports = router;