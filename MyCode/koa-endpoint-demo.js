var koa = require('koa');
var app = koa();
//Not working

//generator function
app.use(function* (){
    this.body = 'Hello World';
});

app.listen(2000);