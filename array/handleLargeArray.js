var array = require('../data/largeArray');
console.log(array.length)

var result = [],
	temp = {};
var start = new Date();

function useFor() {
	for (var i = 0, length = array.length; i < length; i++) {
		if (temp[array[i]]) {
			result.push(array[i])
		} else {
			temp[array[i]] = true;
		}
	}
}

// useFor();//880

function useReduce() {
	array.reduce(function(pre,current) {
		if (temp[current]) {
			result.push(current)
		} else {
			temp[current] = true;
		}	
	});
}
// useReduce();
// 

function useForEach() {
	array.forEach(function(item) {
		if (temp[item]) {
			result.push(item)
		} else {
			temp[item] = true;
		}	
	})
}

useForEach();

var end = new Date();
console.log(result.length)
console.log(end - start)