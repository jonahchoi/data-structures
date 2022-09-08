class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storeIdx = 0;
    this.retreiveIdx = 0;
  }

  enqueue(value) {
    this.storage[this.storeIdx++] = value;
  }

  dequeue() {
    if(this.storeIdx !== this.retreiveIdx) {
      var result = this.storage[this.retreiveIdx];
      this.storage[this.retreiveIdx++] = undefined;
      return result;
    }
  }

  size() {
    return this.storeIdx - this.retreiveIdx;
  }

}
