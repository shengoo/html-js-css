function A() {
	this.fa = function function_name(argument) {
			
	}
}

A.prototype.fb = function function_name(argument) {
		
}

var a = new A();
console.log(a.hasOwnProperty('fa')); // true
console.log(a.hasOwnProperty('fb')); // false