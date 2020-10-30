// PACKAGES
const express = require("express")
const app = express();
const path = require("path")
const foods = require("./api/foods")
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const morgan = require('morgan')
const passport = require("passport");
//CONFIG
const port = process.env.PORT|| 8000;

app.use(express.static("../client/build"));

//MIDDLEWARES
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
//ROUTES
app.post("/login",(req,res)=>{
    console.log(req.body);

})
app.use("/api/foods",foods)


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build","index.html"));
});



//APP PORT

app.listen(port,()=> console.log(`PORT IS RUNNING ON ${port}`));











