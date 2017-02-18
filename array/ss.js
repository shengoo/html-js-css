//有这样一组数据var data = [{sdate : "2016-10-10",yw:0},{sdate : "2016-10-20",yw:1},{sdate : "2016-10-11",yw:4},{sdate : "2016-10-10",yw:2},{sdate : "2016-10-10",yw:7}];
//当有相同日期出现的时候 只保留相同日期yw不为0的第一个数据 和其他日期不相同的数据 


var data = [{
	sdate: "2016-10-10",
	yw: 0
}, {
	sdate: "2016-10-20",
	yw: 1
}, {
	sdate: "2016-10-11",
	yw: 4
}, {
	sdate: "2016-10-10",
	yw: 2
}, {
	sdate: "2016-10-10",
	yw: 7
}];

var temp = {},
	result = [];
data.forEach(function(item) {
	if (temp[item.sdate]) {
		if (item.yw !== 0 && temp[item.sdate].yw === 0) {
			temp[item.sdate] = item;
		}
	} else {
		temp[item.sdate] = item;
	}
});
for (var prop in temp) {
	result.push(temp[prop])
}

console.log(result);