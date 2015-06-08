function spacify(str) {
      return str.split('').join(' ');
    }

String.prototype.spacify = function(){
  return this.split('').join(' ');
}


console.log(spacify('hello world'));
console.log('hello world'.spacify());