var pattern = /[ab]/;
console.log(pattern.test("abcd"))

var pattern = /\w/;//任何ASCII字符组成的单词，等价于[a-zA-Z0-9]
console.log(pattern.test("abcd"))

var pattern = /\W/;//任何不是ASCII字符组成的单词，等价于[^a-zA-Z0-9]
console.log(pattern.test("abcd"))
