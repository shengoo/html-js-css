
var a = "a",
    b = a,
    c = a;
a = "b";
console.log(a,b,c);//b a a

function f () {
  this.name = "a";
}

var f1 = new f(),
    f2 = f1,
    f3 = f1;
f1.name = "b";
console.log(f1.name,f2.name,f3.name);//b b b

var v1 = {name : "a"},
    v2 = v1;
v1.name = "b";
console.log(v1.name,v2.name)//b b