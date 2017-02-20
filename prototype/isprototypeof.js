var p = {x:1};
var o = Object.create(p);
console.log(o); // {}
console.log(p.isPrototypeOf(o)); // true
console.log(Object.prototype.isPrototypeOf(o)); // true