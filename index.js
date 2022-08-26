'use strict'
var express = require('express');
var path = require('path');
var app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var convert = require('color-convert');


app.get('/json', function(req, res){
fs.readFile('colorFile.json', (err, data) => {
    if (err) throw err;
    let jsoncolor = JSON.parse(data);
    res.json(jsoncolor);
});
});

app.post('/test', function(req, res){
let data = JSON.stringify({color: convert.hex.hsv(req.body.color), brightness: req.body.brightness});
fs.writeFileSync('colorFile.json', data)
res.sendStatus(200)
})

app.use(express.static(path.join(__dirname, 'public')));


app.listen(8000);
console.log('listening on port 8000');


