Array.prototype.removeDuplicate = function() {
	return this.reduce(function(last,current){
		if(last.indexOf(current) === -1){
			last.push(current);
		}
		return last;
	},[])
};



var array = [1,1,2,1,3,4,12,4,5,,12,3,4];
var a = array.concat([]);
a = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
console.log(a)

console.log(array.removeDuplicate());