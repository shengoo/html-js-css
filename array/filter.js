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

var filtered = data.reduce(function(previousValue, currentValue, index, array){
	if(currentValue.Value === "1"){
		previousValue.push(currentValue.Name);
	}
  	return previousValue;
},[]);

console.log(filtered)