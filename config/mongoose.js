const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project_database');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connnecting to the MongoDB"));

db.once('open',()=>{
    console.log('Connected to the Database :: MongoDB');
});

module.exports = db;