var uniqueInterger = (function () {
	var counter = 0;
	return function () {
		return counter++;
	};
}());

console.log(uniqueInterger());//0
console.log(uniqueInterger());//1
console.log(uniqueInterger());//2

