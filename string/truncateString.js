function truncate(text,len){
    if (null != text && text.replace(/[^\x00-\xff]/g, 'xx').length > len) { 
        if (escape(text).indexOf( "%u" )<0)
            text = text.substr(0, len) + "..";
        else
            text = text.substr(0, len/2) + "..";//中文
    }
    return text;
}

var a = '1234567890';
var b = '一个字符串';

console.log(truncate(a,5));
console.log(truncate(b,5));

console.log(truncate(a,6));
console.log(truncate(b,6));