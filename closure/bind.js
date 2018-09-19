class Foo {
  constructor (name) {
    this.name = name
  }
  greet () {
    console.log('hello, this is ', this.name)
  }
  someThingAsync () {
    return Promise.resolve()
  }
  asyncGreet () {
    this.someThingAsync()
    .then(this.greet)
    .catch(e => {
      console.log(e)
    });
    // .then(this.greet.bind(this))
    // .then(() => this.greet())
  }
}
new Foo('dog').asyncGreet()