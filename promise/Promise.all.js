var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "foo");
}); 

Promise.all([p1, p2, p3]).then(function(values) { 
  console.log(values); // [3, 1337, "foo"] 
});


var p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1000, "one"); 
}); 
var p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 2000, "two"); 
});
var p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise(function(resolve, reject) {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(function(value) { 
  console.log(value);
}, function(reason) {
  console.log(reason)
});