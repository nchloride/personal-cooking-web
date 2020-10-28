const express = require("express");
const router = express.Router();
const db = require("../database")

router.get("/",(req,res)=>{
    db.get('foods').find({}).then(result => res.json(result));
});

module.exports = router;