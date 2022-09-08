var Set = function() {
  var set = Object.create(setPrototype);
  // empty object
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if not contains item
  if(this._storage[item] === undefined) {
    this._storage[item] = 1;
  }
    // push
};

// look through set for item
setPrototype.contains = function(item) {
  // loop through storage
  for(var key in this._storage) {
    // if item found return true
    if(key === item) {
      return true;
    }
  }

  // return false
  return false;
};


setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  add: O(1)
  contains: O(n)
  remove: O(1)
*/