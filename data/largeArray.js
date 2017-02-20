function make()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for( var i=0; i < 4; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var array = [];

for(var i = 0;i<1000000;i++){
	array.push(make());
}

// export const largeArray = array;
module.exports = array;