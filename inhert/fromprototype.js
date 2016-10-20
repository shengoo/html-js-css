function A(name) {
	this.name = name + ' a';
	var a = this.name;
	this.fa = function() {
		console.log("function in A。" + this.name);
	}
	console.log('name pass to A : ' + name);
}

function B(name) {
	this.name = name + ' b';
	this.fb = function() {
		console.log("function in B。" + this.name);
	}
}

// var a = new A('a');
// a.fa(); //function in A

// var b = new B('b');
// // b.fa(); //throw error;
// b.fb(); //function in B
// console.log(b instanceof A) //false

B.prototype = new A();
var b = new B('ab');
b.fa(); //function in A
b.fb(); //function in B
console.log(b instanceof A) //true
console.log(b instanceof B) //true