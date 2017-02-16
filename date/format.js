var date = new Date();
console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(date.toTimeString())
console.log(date.toDateString())
console.log(date.toGMTString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toUTCString())
console.log(date.toLocaleDateString())
// console.log(date.toLocaleFormat())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
// console.log(date.toSource())

var d = new Date();
console.log(d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate())


//2006-01-02T15:04:05-07:00 or 
//2006-01-02T15:04:05+07:00 or 
//2006-01-02T15:04:05Z



//to gmt+8
var g = new Date();
var gmt8 = new Date(new Date().valueOf() + 8 * 60 * 60000)
console.log(gmt8)

var utcSeconds = g.getUTCSeconds();
var e = new Date(); // The 0 there is the key, which sets the date to the epoch
e.setUTCSeconds(utcSeconds);
console.log(e.toString())

