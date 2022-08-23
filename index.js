'use strict'

var express = require('express');
var path = require('path');
var app = express();
var test = 'Das ist ein langer text und der ist cool'



app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', function(req, res){
    res.json({ text: test});
});

app.listen(8000);
console.log('listening on port 8000');

