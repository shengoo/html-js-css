try{
    f1();
    //函数声明
    function f1(){
        console.log("函数调用成功！");
    }
}catch(e){
    console.log("函数调用失败！");
}

try{
    f2();
    //函数表达式
    var f2 = function(){
        console.log("函数调用成功！");
    }
}catch(e){
    console.log("函数调用失败！");
}

try{
    //函数表达式
    var f3 = function ff(){
        console.log("函数调用成功！");
    }
    ff();
}catch(e){
    console.log("函数调用失败！");
}

console.log(a);//[Function: a]
var a = 2;
function a(){}
console.log(a);//2


console.log(b);//[Function: b]
var b;
function b(){}
console.log(b);//[Function: b]


console.log(c);//undefined
var c = 2;
console.log(c);//2


console.log(d);//[Function: d]
function d(){}
var d = 2;
console.log(d);//2





