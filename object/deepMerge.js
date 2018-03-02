function merge(a,b){
	for(key in b){
		if(a[key] && typeof a[key] === 'object'){
			a[key] = merge(a[key],b[key])
		}else{
			a[key] = b[key]
		}
	}
	return a;
}

var a = {
	a:1,
	b:{
		b1:2
	},
	c: Date.now()
};
var b = {
	a:2,
	b:{
		b2:3
	},
	c: 'c'
};
console.log(merge(a,b))
