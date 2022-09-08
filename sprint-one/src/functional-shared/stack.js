var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.storage = {};
  instance.idx = 0;

  instance = _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.idx++] = value;
  },
  pop:function(){
    if(this.idx !== 0) {
      var result = this.storage[--this.idx];
      this.storage[this.idx] = undefined;
      return result;
    }
  },
  size:function(){
    return this.idx;
  }
};


