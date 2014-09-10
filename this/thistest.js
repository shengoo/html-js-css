this.name = "name";

var obj = {
  name : "obj",
  getname : function(){
    return this.name;
  }
}

var obj1 = {
  name : "obj1",
  getname:function(){
    return function(){
      return this.name;
    }
  }
}

console.log(this.name);
var f1 = obj.getname();
console.log(f1)
console.log(obj.getname())
console.log(obj1.getname()());// will be "name" in a web browser.