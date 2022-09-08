var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var idx = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[idx++] = value;
  };

  someInstance.pop = function() {
    if(idx !== 0) {
      return storage[--idx];
    }
  };

  someInstance.size = function() {
    return idx;
  };

  return someInstance;
};
