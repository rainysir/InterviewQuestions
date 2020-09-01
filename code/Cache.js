/** 
 * @description 实现缓存栈可以储存50个元素，不能重复，超过50个，则最老的失效
 */

function Cache(options = {
  max: 50
}) {
  const { max } = options
  this._cache = new Map()
  this.maxSize = max || 50
}

Cache.prototype.add = function(val) {
  const key = JSON.stringify(val)
  if (this._cache.has(key)) {
    this._cache.delete(key)
  }
  if (this._cache.size === this.maxSize) {
    this.delFirst()
  }
  this._cache.set(JSON.stringify(val), val)
}

Cache.prototype.delFirst = function() {
  const firstKey = this._cache.keys().next().value
  this._cache.delete(firstKey)
}

const a = new Cache({ max: 2 })

a.add({a:1})
a.add({a:2})
a.add({a:3})
a.add({a:1})
console.log(a)
