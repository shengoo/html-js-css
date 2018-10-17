function LetterCapitalize(str) { 

  // code goes here  
  var arr = str.split(' ');
  for (var i = arr.length - 1; i >= 0; i--) {
  	arr[i][0] = arr[i][0].toUpperCase();
  	console.log(arr[i])
  };


         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(LetterCapitalize("hello world"));
var a = [[ 'a','b' ]];
//a[0] = [];
//a[0][0] = "a";
a[0][0] = a[0][0].toUpperCase();
console.log(a)