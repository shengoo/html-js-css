function check (args) {
	var actual = args.length;
	var expected = args.callee.length;
	if(actual !== expected)
		throw Error("Expect " + expected + "args, got" + actual);
}

function f (x,y,z) {
	check(arguments);
	return x + y + z;
}

f(1)//Error: Expect 3args, got1
f(1,2,3)