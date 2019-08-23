const User = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/profile',(req,res)=>{
    return res.render('user_profile',{
        title: "User Profile"
    });
})
router.get('/sign-in',(req,res)=>{
    return res.render('user_sign_in',{
        title: "Codeial | Sign-In"
    })
});
router.get('/sign-up',(req,res)=>{
    return res.render('user_sign_up',{
        title: "Codeial | Sign-Up"
    })
});
router.post('/create',(req,res)=> {
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},(err,user)=>{
        if(err){console.log('Error in finding user in signing up'); return;}
        if(!user){
            User.createIndexes(req.body,(err,user)=>{
                if(err){console.log('Error in creating user in signing up'); return;}
                // the user is created...
                return res.redirect('/user/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
});
// router.post('/create-session',);
module.exports = router;