function arrayRemoveArray(a1,a2){
	for(var i=0;i<a2.length;i++){
		var index = a1.indexOf(a2[i]);
		if(index > -1){
			console.log('delete' + a2[i])
			a1.splice(index,1);
		}
	}
	return a1;
}

console.log(arrayRemoveArray([1,2,3,4],[2,6]))
console.log(arrayRemoveArray([1,2,3,4],[1,2,3,4]))