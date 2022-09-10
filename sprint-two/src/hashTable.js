

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._length = 0;


};

HashTable.prototype.checkLength = function() {
  var runNewStorage = false;

  //If length greater than 75% of limit
  if((this._length / this._limit) > 0.75) {
    this._limit *= 2;
    runNewStorage = true;
  }
  //If length less than 25%
  else if((this._length / this._limit) < 0.25) {
    this._limit /= 2;
    runNewStorage = true;
  }

  if(runNewStorage) {
    // console.log(this._limit)
    var newStorage = LimitedArray(this._limit);
    var currentObject = this;
    //hash old array into neww array
    this._storage.each(function(bucket) {
      if(bucket) {
        for (let j = 0; j < bucket.length; j++) {
          currentObject.insert(bucket[j][0], bucket[j][1], newStorage);
        }
      }
    })
    this._storage = newStorage;
  }
}
//storage: [ arrays[ tuple[0,1], tuple[0,1]], array[], array[]]

HashTable.prototype.insert = function(k, v, store) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dontReHash = false;
  if(!store){
    store = this._storage;
    dontReHash = true;
  }
  //set limited array at index with value
  var bucket = store.get(index) || [];
  bucket.push([k, v]);
  store.set(index, bucket);
  if(dontReHash) {
    this._length++;
    this.checkLength();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get at index
  var bucket = this._storage.get(index);
  var result;
  if(bucket) {
    bucket.forEach(function(tuple) {
      if(tuple[0] === k) {
        result = tuple[1];
      }
    });
  }
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
  this._length--;
  this.checkLength();
};

var hashTester = function() {
  var testHash = new HashTable();

  testHash.insert('abc', '1');
  testHash.insert('def', '2');
  testHash.insert('ghi', '3');
  testHash.insert('jkl', '4');
  testHash.remove('abc');
  testHash.remove('def');
  testHash.remove('ghi');
  console.log(testHash);

}

// hashTester();

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  insert: O(1)
  retreive: O(n)
  remove: O(n^2)
*/