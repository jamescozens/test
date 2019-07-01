const  jimXXX = require("./jim");
const fs = require('fs');

console.log(jimXXX.add(1,4));
console.log('The result is displayed in the Command Line Interface');

 
try{
    // file not presenet
    var data = fs.readFileSync('sample.html');
} 
catch (e) {
    console.log(e instanceof EvalError); // true
    console.log(e.message);              // "Uh oh"
    console.log(e.name);                 // "EvalError"
    console.log(e.fileName);             // "myFile.js"
    console.log(e.lineNumber);           // 25
}
finally {
    console.log("finally..");
}
 
console.log("Continuing with other statements.."+jimXXX.x);


var y = (function (a){
    console.log(a);
})("jim");
