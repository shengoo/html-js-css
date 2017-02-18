// var test = function(){
// console.log("hi")	
// };

// console.log(test)
// var a={1:1,2:2};console.log(a instanceof Array); 

// var b = 199;
// console.log(b)
// console.log(b.toString().length)

// var a = 'IC1612',
//     b = 'IC1608';
// console.log(a.localeCompare(b))

console.log(({}).toString.call());

var x = 10;
function fn() {
    console.log(x);
}

function show(f) {
    var x = 20;
    
    (function(){
        f();
    })();
}

show(fn);//10


var a = '3.77947E+11';
console.log(parseFloat(a))

var b = 1.2;
console.log(parseFloat(b))

var d = "2016/10/31";
console.log(new Date(d).valueOf())

var j = {"date":"2016/9/30","value":""};
console.log(j.value)