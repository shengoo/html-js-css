"use strict";
var Cons = function() {
  this.name = "cons";
};

Cons.prototype.name = "b";

var a = new Cons();
console.log(a.name);