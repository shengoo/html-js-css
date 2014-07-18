var module = (function  (my) {
		
	my.SayHi = function  () {
		console.log("Hi");
	}

	return my;
}(module || {}));


module.SayHi();
var a = 'A';
var codeA = a.charCodeAt();
console.log(codeA)
var b = String.fromCharCode( codeA+1);
console.log(b)