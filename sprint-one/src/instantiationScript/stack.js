class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.idx = 0;
  }

  push(value) {
    this.storage[this.idx++] = value;
  }

  pop() {
    if(this.idx !== 0) {
      var result = this.storage[--this.idx];
      this.storage[this.idx] = undefined;
      return result;
    }
  }

  size() {
    return this.idx;
  }

}

var instantiateStacks = function() {
  for(var i = 0; i < 10000; i++) {
    var stack = new Stack();
    for(var j = 0; j < 10000; j++) {
      stack.push(j);
      stack.size();
    }
    for(var j = 0; j < 10000; j++) {
      stack.pop(j);
    }

  }
}

// var stack;
// var instantiator = Stack;
// stack = instantiator();

var x = instantiateStacks();

