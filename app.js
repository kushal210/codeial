const express = require('express');
const app = express();
const port = process.env.port ||3000;
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./static'));

app.set('view engine','ejs');
app.set('views','views');

app.use(expressLayouts);
// extract style and script from subpages into  the layout...
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes/index'));

app.listen(port,(err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`The server is running on port : ${port}`);
});