var express = require('express');
var fs = require('fs');

// reference to a variable app from an instance of express
var app = express();

//serve static content
app.use('/message', function(req,res){
    console.log('user requested endpoint');
    res.send('hello');
});

//another endpoint

app.use('/users', function(req,res){
   fs.readFile('./data1.json', 'utf-8', function(err, data){
    res.send(data);
   }); 
});

//Listening
app.listen(2000);