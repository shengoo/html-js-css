function A(name,age){
  this.name = name + "a";
  this.age = age + 2;
  this.fa = function(){
    console.log("function in A");
  }
}

function B(name,age){
  A.apply(this,[name,age]);
  this.name = name + "b";
  this.age = age;
  // A.apply(this,[name,age]);
  //override
  this.fa = function(){
    // ? how to call A's fa here
    // this.fa.apply(this);
    console.log("fa in B")
  }
  this.fb = function(){
    console.log("function in B");
  }
}
var a = new A("a",2);
a.fa();
var b = new B("a",2);
b.fa();
b.fb();