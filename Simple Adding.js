function SimpleAdding(num) { 

  // code goes here  
  for (var i = num-1; i > 0; i--) {
  	num += i;
  };
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(SimpleAdding(2));      