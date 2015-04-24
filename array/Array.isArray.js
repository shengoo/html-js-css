// 下面的语句返回true
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray( new Array() ));
console.log(Array.isArray( Array.prototype )); // 鲜为人知的事实:Array.prototype其实也是一个数组.

// 下面的语句返回 false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ __proto__ : Array.prototype }));