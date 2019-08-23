const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    console.log(req.cookies);

    return res.render('home',{
        title: "Home"
    });
});

router.use('/user',require('./users'));

module.exports = router;