var express = require('express');

// reference to a variable app from an instance of express
var app = express();

//serve static content
app.use(express.static(__dirname));
//Listening
app.listen(2000);