

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //set limited array at index with value
  var bucket = this._storage.get(index) || [];
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get at index
  var bucket = this._storage.get(index);
  var result;
  bucket.forEach(function(tuple) {
    if(tuple[0] === k) {
      result = tuple[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //each, if index === i, set to undefined
  var bucket = this._storage.get(index);
  bucket.forEach(function(tuple, i) {
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  insert: O(1)
  retreive: O(n)
  remove: O(n^2)
*/