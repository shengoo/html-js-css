var obj = new Object();
var objRef = obj;
obj.someProp = true;
console.log(objRef===obj); // true

var arr = new Array(1,2);
var arrRef = arr;
arr.push(3);
console.log(arr === arrRef); // true

var str = "test";
var strRef = str;
str += "ing";
console.log(str === strRef); // false

var num = 1;
var numRef = num;
num += 1;
console.log(num === numRef); // false

var boo = true;
var booRef = boo;
boo = !boo;
console.log(boo === booRef); // false

