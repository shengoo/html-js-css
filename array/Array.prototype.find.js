var inventory = [{
	name: 'apples',
	quantity: 2
}, {
	name: 'bananas',
	quantity: 0
}, {
	name: 'cherries',
	quantity: 5
}];

function findCherries(fruit) {
	return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }

var data = [{
	"Name": "Interval",
	"Value": "1"
}, {
	"Name": "IntervalMultiplier",
	"Value": "1"
}, {
	"Name": "Name",
	"Value": "CN, CIA Real Estate Transaction Data, Area, Wuhan"
}];

console.log(data.find(function(property) {
	console.log(property)
	return property.Name == 'Name'
}).Value.replace('CN, CIA Real Estate Transaction Data, Area, ', ''));