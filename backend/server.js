// PACKAGES
const express = require("express")
const app = express();
require("dotenv").config();
const bcrypt = require("bcryptjs");
const path = require("path");
const foods = require("./api/foods");
const messages = require("./api/messages");
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const morgan = require('morgan')
const passport = require("passport");
const jwt = require("jsonwebtoken");
const db = require("./database");
const bodyParser = require("body-parser");
//CONFIG
const port = process.env.PORT|| 8000;

// app.use(express.static("../client/build"));
app.use('/',express.static(path.join(__dirname, "../client/build")));
//MIDDLEWARES

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}))
app.use(express.json());
app.use(helmet());
app.use(session({
    secret:'secretcode',
    resave:true,
    saveUninitialized:true
}))
app.use(cookieParser("secretcode"))
app.use(morgan('common'))
app.use(passport.initialize());
app.use(passport.session())
require("./passport-config")(passport);
//ROUTES
app.post("/login",(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) console.log(err);

        if(!user) res.send({message:"Login Failed!"});
        else{
            req.login(user,(error)=>{
                if(error) console.log(error);
                else{
                   const accessToken = jwt.sign(user,process.env.SECRET_TOKEN);
                   res.json({accessToken});
                }
            })
        }
    })(req,res,next);
})
app.post("/register",async (req,res)=>{
    const {username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    db.get("user").findOne({username}).then(doc=>{
        if(!doc){
            db.get("user").insert({username,password:hashedPassword})
            .then(result=>{
                res.send({message:"User Created"});
            })
        }
        else{
            res.send({message:"Username already taken!"})
        }
    })
})
app.get("/isLogin",(req,res)=>{
    req.user !== null && req.user !== undefined ? res.send({authenticated:true}) : res.send({authenticated:false})
})
app.get("/logOut", (req,res)=>{
    req.logout();
    res.redirect('/');
})
//API's
app.use("/api/foods",foods)
app.use("/api/messages",messages)
app.get("/*", (req, res) => {

    console.log("AAAAAA");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    //res.sendFile(__dirname + "/client/build")
    //res.sendFile('index.html',{root:path.join(__dirname, "../client/build")});
    //res.redirect("/")
});



//APP PORT

app.listen(port,()=> console.log(`PORT IS RUNNING ON ${port}`));











