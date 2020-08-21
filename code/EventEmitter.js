function Event() {
  if (!(this instanceof Event)) {
      return new Event();
  }
  this._callbacks = {};
}

Event.prototype.on = function (type, handler) {
  this_callbacks = this._callbacks || {};
  this._callbacks[type] = this.callbacks[type] || [];
  this._callbacks[type].push(handler);

  return this;
};

Event.prototype.off = function (type, handler) {
  var list = this._callbacks[type];

  if (list) {
      for (var i = list.length; i >= 0; --i) {
          if (list[i] === handler) {
              list.splice(i, 1);
          }
      }
  }

  return this;
};

Event.prototype.trigger = function (type, data) {
  var list = this._callbacks[type];

  if (list) {
      for (var i = 0, len = list.length; i < len; ++i) {
          list[i].call(this, data);
      }
  }
};

Event.prototype.once = function (type, handler) {
  var self = this;

  function wrapper() {
      handler.apply(self, arguments);
      self.off(type, wrapper);
  }
  this.on(type, wrapper);
  return this;
};