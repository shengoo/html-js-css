var result = [];
for(var i = 0;i<10;i++){
	var age = Math.floor(Math.random() * 60)
	var weight = Math.floor(Math.random() * 60)
	var person = {
		name = 'name' + i,
		age,
		weight
	}
	result.push(person);
}
console.log(result)