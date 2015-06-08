function A(){};
A.prototype.test = "someValue";
var a = {};
a.constructor = A;
a.__proto__ = A.prototype;

console.log(a.test)//"someValue"

// console.log(({}).__proto__); //Object {}
// console.log(({}).prototype); //undefined
// console.log(({}).__proto__.__proto__); //null

function A(){}
A.prototype.a = "valueFromA";
function B(){}
B.prototype = new A();
//B.prototype.__proto__ = A.prototype;
//B.prototype = Object.create(A.prototype);
B.prototype.b = "valueFromB";
var inst = new B();
console.log(inst.a); //valueFromA
console.log(inst.b); //valueFromB;


