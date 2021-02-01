const express = require("express");
const router = express.Router();
const db = require("../database")
const userAuthenticated = require("../tokenAuth/tokenAuth");

const foodCache = {};
router.get("/:name?",(req,res)=>{
    const {name} =req.params;
    const allFoods = name ? name : 'all';
    console.log(foodCache[allFoods]);
    if(foodCache[allFoods]){
        res.json(foodCache[name])
    }
    else{
    if(name) return db.get('foods')
        .findOne({name})
        .then(result => {
            res.json(result);
            foodCache[name] = result;
        });
    db.get('foods')
        .find({})
        .then(result =>{ 
            res.json(result);
            foodCache[name] = result;
        });
    }
});
router.post("/",userAuthenticated,(req,res)=>{
    req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1,req.body.name.length);
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