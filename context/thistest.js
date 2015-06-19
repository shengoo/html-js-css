var a = 1;

var obj1 = {
  a:2,
  fun : function(){
    console.log(this.a)
  }
};

var obj2 = {
  a:3,
  fun : function(fn){
    fn();
    arguments[0]();
  }
};

obj2.fun(obj1.fun,obj2.fun)