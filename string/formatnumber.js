var n = 1234.56789;
console.log(Intl.NumberFormat)
console.log(n.toLocaleString('en-US', { maximumFractionDigits: 2 , minimumFractionDigits:2}));
console.log(n.toPrecision(7))
console.log(n.toPrecision(7).toLocaleString())

var options = { style: 'currency', currency: 'RUB' };
var numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));