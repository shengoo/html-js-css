var date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toTimeString())
console.log(date.toDateString())
console.log(date.toGMTString())
console.log(date.toUTCString())
console.log(date.toLocaleString())
console.log(date.toLocaleTimeString())
console.log(date.toLocaleDateString())

var d = new Date();
console.log(d.getFullYear()  + "-" + (d.getMonth()+1) + "-" + d.getDate())


//2006-01-02T15:04:05-07:00 or 
//2006-01-02T15:04:05+07:00 or 
//2006-01-02T15:04:05Z