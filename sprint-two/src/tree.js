var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // children will be an empty array upon instantiation
  newTree.children = [];  // fix me
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new tree and pass in value
  var childTree = Tree(value);
  // push new tree to tree.children
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  // if target matches tree
  if (this.value === target) {
    // return true
    return true;
  }

  var result = false;
  // main recursive case
  // loop through tree children
  this.children.forEach(function(child) {
    // return result of contains for each child
    if(!result) {
      result = child.contains(target);
    }
  })

  // base case
  // if no children return false
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
