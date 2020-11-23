const jwt = require("jsonwebtoken")
const userAuthenticated = (req,res,next) =>{
    if(req.headers.authorization){
        const accessToken = req.headers.authorization.split(" ")[1];
        jwt.verify(accessToken,process.env.SECRET_TOKEN,(err,user)=>{
            if(err) return res.send(err);
            next();
        })
    }
    else{
        res.sendStatus(404);
    }
}
module.exports = userAuthenticated;