var sum = function(n){
  if (n <= 0) {
    return 0;
  }
  else{
    return n + arguments.callee(n - 1);
  } 
}

console.log(sum(3))