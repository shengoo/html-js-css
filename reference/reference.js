var a = {
	name : 'a',
	age: 12,
	sex:{
		s:'s'
	}
};
var b = a.age;
b = 13;
console.log(a);
var c = a.sex;
c.c = 'c';
console.log(a);