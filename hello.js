//RUN WITH learnyounode i cmd
//2.
/*var tal = 0;

for (let index = 2; index < process.argv.length; index++) {
    tal += parseInt(process.argv[index]);
}

console.log(tal);*/
//3.
/*
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var antal = str.split('\n');
var antals = antal.length;
console.log(antals-1)
*/
//4.
/*
var fs = require('fs');
var file = fs.readFile(process.argv[2],(err, data)=>{
var str = data.toString();
var antal = str.split('\n');
var antals = antal.length;
console.log(antals-1);
throw err; 
});
*/
//5
/*
var fs = require('fs');
var pathname = process.argv[2];
var typefile = process.argv[3];
var file = fs.readdir(pathname,(err, list)=>{
    var totalArray = [];
    for (let index = 0; index < list.length-5; index++) {
        if(list[index].includes(typefile)){
            console.log(list[index]);
        }
        
    }

});*/
//6
/*
var myModule = require('./test2for6.js');

var directory = process.argv[2];
var filter = process.argv[3];

var callback = function(error, filtered) {
  if (error) {
    console.log('error');
    console.log(error);
  }
  for (var index in filtered) {
    console.log(filtered[index]);
  }
};

myModule(directory, filter, callback);
*/  
//7
