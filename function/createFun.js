// 创建了一个能返回两个参数和的函数
var adder = new Function("a", "b", "return a + b");

// 调用函数
console.log(adder(2, 6));
//  8