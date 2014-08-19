function upperToHyphenLower(match){
  return '(' + match+ ')';
}

var str = 'zhllZHaa';
var reg = new RegExp('zh', 'ig');
console.log(str.replace(reg,upperToHyphenLower))//(zh)ll(ZH)aa