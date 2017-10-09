
//native promise library
// has separate callbacks for success and failures
var promise = new Promise(function(resolve, reject){
    resolve();
    //reject();
});

//is called when resolve() is called
promise.then(function(){
    console.log('then');
})
//this catches the erroe so when a reject is called this block gets executedn
.catch(function(){
    console.error('failed');
});