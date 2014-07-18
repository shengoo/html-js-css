var s = "test";
console.log(s.toString());
var S = new String("test");
console.log(S.toString());
console.log(typeof s);
console.log(typeof S);
console.log(s == S);
console.log(s === S);

var s = "test";         // Start with a string value.
s.len = 4;              // Set a property on it.
var t = s.len;          // Now query the property.
console.log(t);			// undefined



var n = 1;
var N = new Number(1);
console.log(typeof n);
console.log(typeof N);
console.log(n == N);
console.log(n === N);

var n = 1;
n.len = 2;
console.log(n.len)

var a = new Boolean(false);
console.log(a);
console.log(a == false)
console.log(a === false)
if(a){
	console.log("a is true")
}else{
	console.log("a is false")
}