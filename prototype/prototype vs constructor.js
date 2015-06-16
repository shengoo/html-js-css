function A(){
  //wrong way
  //效率低下，每个实例创建的时候都会创建f1
  this.f1 = function(){
    console.log("f1");
  }
}
//correct way
A.prototype.f2 = function(){
  console.log("f2");
}

var a = new A();
var b = new A();
console.log(a.f1 === b.f1);//false
console.log(a.f2 === b.f2);//true