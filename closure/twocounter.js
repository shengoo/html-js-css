function counter () {
	var n = 0;
	return{
		count:function () {
			return n++;
		},
		reset:function(){
			n = 0;
		}
	};
}

var c = counter(),d = counter();
console.log(c.count());//0
console.log(d.count());//0
c.reset();
console.log(c.count());//0
console.log(d.count());//1