var a = "log";
console[a]("hehe");

function foo()
{
    console.log('x');
}
 
console.log(foo.toString());

var x = 10;
 
function f()
{
	var x = 2;
    console.log(x);
}
 
f();

var s = "test";
s.len = 4;
console.log(s)