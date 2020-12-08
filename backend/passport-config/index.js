const db = require('../database');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;


module.exports = function(passport){
    passport.use(
        new LocalStrategy(function(username,password,done){
            db.get("user").findOne({username})
            .then(docs=>{
                console.log(docs);
                if(!docs){
                    return done(null,false)
                }
                else{
                    bcrypt.compare(password,docs.password,(err,result)=>{
                        if(err) console.log('ESDFrror: ',err);
                        if(result){
                            return done(null,docs)
                        }
                        else{
                            return done(null,false)
                        }
                    })
                }

            })
        })
    )
    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser(function (id, done) {
      db.get("user")
        .find({ _id: id })
          .then((doc) => done(null, doc));
    });
}