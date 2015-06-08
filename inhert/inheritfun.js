function A(){
  this.fa = function(){
    console.log("function in A");
  }
}

function B(){
  this.fb = function(){
    console.log("function in B");
  }
}

// B.prototype = A.prototype;
B.prototype = new A();
var b = new B();
b.fa();
b.fb();