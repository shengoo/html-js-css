var a;//undefined
console.log(a);//undefined
console.log(typeof a);//undefined
console.log(typeof a == undefined)//false
console.log(typeof a == "undefined")//true
console.log(typeof a === undefined)//false
console.log(typeof a === "undefined")//true
console.log(a==null);//true
console.log(a==undefined);//true
console.log(a===null);//false
console.log(a===undefined);//true


console.log("*******************");

var b = null;//null
console.log(b);//null
console.log(typeof b);//object
console.log(typeof b == undefined)//false
console.log(typeof b == "undefined")//false
console.log(typeof b === undefined)//false
console.log(typeof b === "undefined")//false
console.log(b==null);//true
console.log(b==undefined);//true
console.log(b===null);//true
console.log(b===undefined);//false

