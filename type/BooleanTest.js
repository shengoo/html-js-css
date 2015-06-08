var a = new Boolean(false);
var b = new Boolean(false);
console.log(a);//{}
console.log(a == false)//true
console.log(b == false)//true
console.log(a == b)//false
console.log(a === false)//false
console.log(a === b)//false
if(a){
    console.log("new Boolean(false) is true")//new Boolean(false) is true
}else{
    console.log("new Boolean(false) is false")
}