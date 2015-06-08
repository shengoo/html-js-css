function A(){
  this.fa = function(){
    console.log("function in A");
  }
}

function B(){
  A.call(this);
  this.fb = function(){
    console.log("function in B");
  }
}

var b = new B();
b.fa();
b.fb();