var obj = {
	sayHi:function  () {
		console.log("hi");
	}
}

function trace(o,m){
	var original = o[m];	// save original function
	o[m] = function  () {
		console.log(new Date(), "Entering:",m);
    console.log(this)//{ sayHi: [Function] }
		var result = original.apply(this,arguments);	// invoke original function
		console.log(new Date(),"Exiting:",m);
		return result;
	};
}

trace(obj,"sayHi");
obj.sayHi()