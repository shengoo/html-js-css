//该特性处于 ECMAScript 6 规范草案中，目前的实现在未来可能会发生微调，请谨慎使用。

// 将类数组对象（arguments）转换成数组
(function () {
    var args = Array.from(arguments);
    return args;
})(1, 2, 3);                            // [1, 2, 3]

// 将可迭代对象（Set 对象）转换成数组
Array.from(Set(["foo", window]));       // ["foo", window]

// Map 对象也可以
var m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);                          // [[1, 2], [2, 4], [4, 8]]  

// 字符串对象既是类数组又是可迭代对象
Array.from("foo");                      // ["f", "o", "o"]

// 使用 map 函数转换数组元素
// Array.from([1, 2, 3], x => x + x);      // [2, 4, 6]

// 生成一个数字序列
// Array.from({length:5}, (v, k) => k);    // [0, 1, 2, 3, 4]