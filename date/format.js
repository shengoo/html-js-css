var date = new Date();
console.log(date.toString()); //Wed Oct 18 2017 10:08:19 GMT+0800 (China Standard Time)
console.log(date.toLocaleDateString()); // 2017-10-18
console.log(date.toTimeString()) // 10:08:19 GMT+0800 (China Standard Time)
console.log(date.toDateString()) // Wed Oct 18 2017
console.log(date.toGMTString()) // Wed, 18 Oct 2017 02:08:19 GMT
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toUTCString())
console.log(date.toLocaleDateString())
// console.log(date.toLocaleFormat())
console.log(date.toLocaleString()) // 2017-10-18 10:08:19
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
