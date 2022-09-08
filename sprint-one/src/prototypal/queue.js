var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.storage = {};
  instance.storeIdx = 0;
  instance.retreiveIdx = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.storeIdx++] = value;
  },
  dequeue: function(){
    if(this.storeIdx !== this.retreiveIdx) {
      var result = this.storage[this.retreiveIdx];
      this.storage[this.retreiveIdx++] = undefined;
      return result;
    }
  },
  size: function(){
    return this.storeIdx - this.retreiveIdx;
  }
};


