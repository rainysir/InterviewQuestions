function LazyManConstructor(name) {
  this.callbacks = []
  console.log(`Hi I am ${name}`)
  setTimeout(() => {
    this.next()
  }, 0)
}

LazyManConstructor.prototype.sleep = function(time) {
  const _this = this
  _this.callbacks.push(function() {
    console.time('sleep')
    setTimeout(() => {
      _this.next()
      console.timeEnd('sleep')
    }, time)
  })
  return _this
}

LazyManConstructor.prototype.eat = function(sth) {
  const _this = this
  _this.callbacks.push(function() {
    console.log(`Hi I am eating ${sth}`)
    _this.next()
  })
  return _this
}

LazyManConstructor.prototype.next = function(sth) {
  const fn = this.callbacks.shift()
  fn && fn()
}

LazyManConstructor.prototype.sleepFirst = function(time) {
  const _this = this
  _this.callbacks.unshift(function() {
    console.time('sleepFirst')
    setTimeout(() => {
      _this.next()
      console.timeEnd('sleepFirst')
    }, time)
  })
  return _this
}

function LazyMan(name) {
  return new LazyManConstructor(name)
}
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(500).sleep(1000).eat('junk food');