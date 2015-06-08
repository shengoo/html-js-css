this.x = 9; 
var module = {
  x: 81,
  getX: function() { 
    console.log(this.x);
    return this.x; 
  }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, 因为在这个例子中，"this"指向全局对象

// 创建一个'this'绑定到module的函数
var boundGetX = module.getX.bind(module);
boundGetX(); // 81

module.getX.apply(module)