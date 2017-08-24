function getPromise() {
	var promise = new Promise((resolve, reject) => {
		resolve(1);
	});
	return promise.then(add).then(check);
}

function add(argument) {
	return argument + 1;
}

function check(argument) {
	if (argument === 1) {
		return argument + 1;
	}
	throw new Error('eeeeeeeeeeeeee');
}

var promise = getPromise();
promise.then(function (result) {
	console.log(result)
}).catch(function (reason) {
	console.log(arguments)
});

console.log(promise)