var fs = require('fs');

var data  = require('./data1.json');
// this is an object
console.log(data.name);  


//to read from the file
fs.readFile('./data1.json', 'utf-8', function(err, data){
    // can't do data.name as data is just a string
    //In order to get an object from readFile we need to parse it with json.parse
    data = JSON.parse(data);
   console.log(data.name); 
});