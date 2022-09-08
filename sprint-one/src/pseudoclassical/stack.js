var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.idx = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.idx++] = value;
};

Stack.prototype.pop = function() {
  if(this.idx !== 0) {
    var result = this.storage[--this.idx];
    this.storage[this.idx] = undefined;
    return result;
  }
};

Stack.prototype.size = function() {
  return this.idx;
};
