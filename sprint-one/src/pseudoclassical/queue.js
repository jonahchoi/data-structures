var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storeIdx = 0;
  this.retreiveIdx = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.storeIdx++] = value;
};

Queue.prototype.dequeue = function() {
  if(this.storeIdx !== this.retreiveIdx) {
    var result = this.storage[this.retreiveIdx];
    this.storage[this.retreiveIdx++] = undefined;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.storeIdx - this.retreiveIdx;
};


