
function A(){
	this.fa = function(){
		console.log("function in A");
	}
}

function B(){
	this.fb = function(){
		console.log("function in B");
	}
}

var a = new A();
a.fa();//function in A

var b = new B();
// b.fa(); //throw error;
b.fb(); //function in B
console.log(b instanceof A) //false

B.prototype = new A();
var b = new B();
b.fa(); //function in A
b.fb(); //function in B
console.log(b instanceof A)//true
console.log(b instanceof B)
