function clone(object) {console.log('clone')
	if(!object || typeof(obj) !== 'object'){
		return object;
	}
	var result = {};
	for(var key in object){
		if(object.hasOwnProperty(key)){
			result[key] = typeof(object[key]) === 'object' ? clone(object[key]) : object[key];
		}
	}
	return result;
}

var a = 1,b = '2', c = true, d = new Date(), e = function (argument) {
	
},f = [];
// console.log(typeof(a))
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)

var obj = {
	name: 'Name',
	age: 11,
	birth: new Date(),
	sayHi: function(){
		console.log('hi');
	},
	likes: ['football'],
	friends: [{
		name:'Jack'
	}]
}
var cloned = clone(obj);
console.log(cloned)
