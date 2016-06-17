function TestClass(name) {
	this.name = name;
	print();
	function print() {
		console.log(this.name)
	}
	this.test();
}
TestClass.prototype.test = function(){
	console.log(this.name);
}
var name = 'name';
new TestClass(2);
// TestClass(1);
