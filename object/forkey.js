var obj = {
  name: 'test'
};
for (var key in obj) {
  // if(obj.hasOwnProperty(key)){
    console.log('key:' + key + ',val:' + obj[key]);
  // }
};