var regex = /^[0-9.,]+$/;
console.log(regex.test(1));
console.log(regex.test('1a,2.2'));
console.log(regex.test('1,222.02'));
console.log(regex.test(1));
console.log(regex.test(1));
console.log(regex.test(1));
