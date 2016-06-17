var data = [
    {
      "HeaderText": "本月",
      "HeaderTextCN": "本月",
      "HeaderTextEN": "This Month",
      "HeaderColumnSpan": 2,
      "HeaderLevel": 3,
      "HeaderStyle": null,
      "Culture": "zh-CN"
    },
    {
      "HeaderText": "本年",
      "HeaderTextCN": "本年",
      "HeaderTextEN": "This Year",
      "HeaderColumnSpan": 2,
      "HeaderLevel": 1,
      "HeaderStyle": null,
      "Culture": "zh-CN"
    },
    {
      "HeaderText": "上年",
      "HeaderTextCN": "上年",
      "HeaderTextEN": "Last Year",
      "HeaderColumnSpan": 2,
      "HeaderLevel": 1,
      "HeaderStyle": null,
      "Culture": "zh-CN"
    }
  ];
var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
  	console.log(rv,x);
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
Array.prototype.groupBy = function(key){
	return this.reduce(function(rv, x) {
  	console.log(rv,x);
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
// console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(['one', 'two', 'three'].groupBy('length'));
// console.log(groupBy(data,'HeaderLevel'));
