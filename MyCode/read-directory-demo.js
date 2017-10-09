var fs = require('fs');

fs.readdir('d:/', function(err, data){
    console.log(data);
});