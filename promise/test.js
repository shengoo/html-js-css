var promise = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, "foo");
}); 

function handler(argument) {
	console.log(arguments);
}

promise.then(handler)