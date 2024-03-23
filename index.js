var express = require('express');
var bodyParser = require('body-parser')

var connectDB = require('./dbConnect')
var router = require('./router.js');
var app = express();

connectDB()

//both index.js and things.js should be in same directory
app.use(bodyParser.json())
app.use('/', router);

app.listen(3000,()=>console.log('Server Started'));
