var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // children will be an empty array upon instantiation
  newTree.children = [];  // fix me
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

// A .removeFromParent() method, which disassociates the tree with its parent (in both directions)
treeMethods.removeFromParent = function() {
  var currentTree = this;
  //This parent children,
  this.parent.children = this.parent.children.filter(function(child) {
    return (child !== currentTree) ? true : false;
  })
  //set current parent to null
  this.parent = null;
}

treeMethods.addChild = function(value) {
  // create new tree and pass in value
  var childTree = Tree(value);
  childTree.parent = this;
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

var treeTester = function() {
  var testTree = Tree(1);

  testTree.addChild(2);
  testTree.addChild(3);

  console.log(testTree.contains(3));

  testTree.children[1].removeFromParent();

  console.log(testTree.children);

}

// treeTester();
/*
 * Complexity: What is the time complexity of the above functions?
 */
