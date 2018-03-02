var content = `This chapter documents all of JavaScript's standard, built-in objects, including their methods and properties.

The term "global objects" (or standard built-in objects) here is not to be confused with the global object. Here, global objects refer to objects in the global scope. The global object itself can be accessed using the this operator in the global scope (but only if ECMAScript 5 strict mode is not used; in that case it returns undefined). In fact, the global scope consists of the properties of the global object, including inherited properties, if any.

Other objects in the global scope are either created by the user script or provided by the host application. The host objects available in browser contexts are documented in the API reference. For more information about the distinction between the DOM and core JavaScript, see JavaScript technologies overview.`;

function find(content){
	for(let char of content){
		console.log(char)
	}
}

console.log(find(content))