function log() {
  // arguments.unshift("begin")
  console.log(arguments);
}

// function log(){
//   console.log.apply(console,arguments);
// }

log('hello world',2)
var a = 'IH1604';
var b = 'IH1605';

console.log(a.charAt(a.length - 1) - b.charAt(b.length - 1))