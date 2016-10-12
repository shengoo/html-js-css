var obj = {
  name: 'test'
};
for (var key in obj) {
  // if(obj.hasOwnProperty(key)){
    console.log('key:' + key + ',val:' + obj[key]);
  // }
};

var s = {"北京":false,"天津":false,"河北":true,"山西":false,"内蒙古":false,"辽宁":false,"吉林":false,"黑龙江":false,"上海":false,"江苏":false,"浙江":false,"安徽":false,"福建":false,"江西":false,"山东":false,"河南":false,"湖北":false,"湖南":false,"广东":false,"广西":false,"海南":false,"重庆":false,"四川":false,"贵州":false,"云南":false,"西藏":true,"陕西":false,"甘肃":false,"青海":true,"宁夏":false,"新疆":true,"台湾":false,"香港":false,"澳门":false};

for(var key in s){
	if(s[key] && s.hasOwnProperty(key)){
		console.log(key);
	}
}