function compare(obj,anotherObj) {
	for(prop in obj){
        if(obj.hasOwnProperty(prop)){
        	if(obj[prop] !== anotherObj[prop]){
        		return false;
        	}
        }
    }
    return true;
}

var a = {a:1,b:true},
 	b = {a:1,b:true},
 	c = {a:'1',b:true};
console.log(compare(a,b));
console.log(compare(a,c));