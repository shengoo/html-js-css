// var d = Date.parse("2016年4月19日");
var d = new Date(1461024000000);
var d2 = new Date(1461024000000 - 1000*60*60*24)
console.log(d.toUTCString())
console.log(d2.toUTCString())

var d3 = new Date('2016-04-20T00:00:00Z');
// d3.setHours(0,0,0,0);
console.log(d3.valueOf())
var d4 = new Date(1461110400*1000);
// d4.setHours(0,0,0,0);
console.log(d4.getTime())
console.log(d3.getTime()==d4.getTime())

var a = "13636252.362";
var b = 13636252.362;
console.log(parseFloat(a))

console.log(new Date('2016-03-01T00:00:00'))

console.log(Date.UTC(2016, 9, 21))