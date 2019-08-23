const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport..
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email,password,done){
        // find a use and establish the identity...
        User.findOne({email: email},(err,user)=>{
            if(err){
                console.log('Error in finding the user --> Passport');
                return done(err);   
                // done takes two argument (err and user)
            }
            if(!user || user.password != password){
                console.log('Invalid User Name/Password !');
                return done(null,false);    // There is no error but user is not found..
            }
            return done(null.user);
        });
    }
));

// serialize the user to decide which key is kept in the cookies..
passport.serializeUser((user,done)=>{
    return done(null,user.id);
});
// deserialize the user form the key in the cookie...
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,done)=>{
        return done(err,user);
    });
});

module.exports = passport;