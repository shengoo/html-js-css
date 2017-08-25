for (var i = 0; i < 10; ++i) {
	var j = i;
    setTimeout(function () {console.log(j)}, 0);
}
for (var i = 0; i < 10; ++i) {
	const j = i;
    setTimeout(function () {console.log(j)}, 0);
}

for (var i = 0; i < 10; ++i) {
	(function() {
		var j = i;
	    setTimeout(function () {
	    	console.log(j)
	    }, 0);
	})();
}