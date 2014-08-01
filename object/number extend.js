Number.prototype.times = function(f,context){
	console.log(f.toString());
	console.log(this.toString())
	var n = Number(this);
	for(var i = 0;i<n;i++){
		f.call(context,i);
	}
}

var n = 3;
n.times(function(n){//different n
	console.log(n + " times");
});


//wrong: 3 won't be cast to object
//3.times(function(n){console.log(n + " times");});