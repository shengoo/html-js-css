function SomeObject(){
  this.name = "a name";
}

var c = new SomeObject();
console.log(typeof c)// object
console.log(c.name);// a name

var b = SomeObject();
console.log(typeof b)// undefined
console.log(b.name)// TypeError: Cannot read property 'name' of undefined