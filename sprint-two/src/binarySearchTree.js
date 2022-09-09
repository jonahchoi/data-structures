// http://127.0.0.1:8080
var BinarySearchTree = function(value) {
  var tree = {};

  tree.left = null;
  tree.right = null;
  tree.value = value;

  tree = _.extend(tree, binaryMethods);

  return tree;
};

var binaryMethods = {};

binaryMethods.insert = function(value) {
  // if value is less than parent
  if(value < this.value) {
    // if no left child add value as child
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    }
    // insert on left child
    else {
      this.left.insert(value);
    }
  }
  // if value greater than parent
  if(value > this.value) {
    // if no right child add value as child
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    }
    // insert on right child
    else {
      this.right.insert(value);
    }
  }
};
// console.log(typeof BinarySearchTree.prototype.insert)

binaryMethods.contains = function(value) {
  // depth first search to find value

  //Check current value matches
  if(value === this.value) {
    //return t
    return true;
  }
  else if(value < this.value) {
    if(this.left !== null) {
      if(this.left.contains(value)){
        return true;
      }
    }
  }
  else{
    if(this.right !== null) {
      if(this.right.contains(value)) {
        return true;
      }
    }

  }

  return false;
};
binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);

  if(this.left !== null) {
    this.left.depthFirstLog(callback)
  }
  if(this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

  insert:logN
  contains: logN
  depthFirstLog:linear

 */
