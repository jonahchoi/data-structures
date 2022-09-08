var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storeIdx = 0;
  var retreiveIdx = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storeIdx++] = value;
  };

  someInstance.dequeue = function() {
    if(storeIdx !== retreiveIdx) {
      var result = storage[retreiveIdx];
      storage[retreiveIdx++] = undefined;
      return result;
    }
  };

  someInstance.size = function() {
    return storeIdx - retreiveIdx;
  };

  return someInstance;
};
