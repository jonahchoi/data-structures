// http://127.0.0.1:8080
var BinarySearchTree = function(value, root) {
  var tree = {};
  if (root) {
    tree.root = true;
  }
  tree.left = null;
  tree.right = null;
  tree.value = value;

  tree = _.extend(tree, binaryMethods);

  return tree;
};

var binaryMethods = {};
/*
         11
      9     12
    8  10

*/
binaryMethods.findDepth = function(isMax) {
  var min = Infinity;
  var max = 0;
  var level = 1;

  var helper = function(val) {
    if(val.left !== null) {
      level++
      helper(val.left);
    }
    if(val.right !== null) {
      level++
      helper(val.right);
    }
    if (!val.left && !val.right) {
      min = Math.min(min, level)
      max = Math.max(max, level)
    }
    level--;
    return {
      min: min,
      max: max
    };
  }
  return helper(this);
}

binaryMethods.rebalance = function() {

  var allValues = [];

  this.depthFirstLog(function(val) {
    allValues.push(val);
  })
  // sort array
  allValues.sort(function(a, b) {
    return a - b;
  });
  this.value = allValues[Math.floor((allValues.length-1)/2)];
  this.left = null;
  this.right = null;

  // "Binary search" each value and insert to tree
  var queue = [];

  var binarySearch = function(start, end) {
    var midIdx = Math.floor((end + start)/2);
    queue.push(allValues[midIdx]);
    if(start <= midIdx - 1){
      // rootTree.insert(binarySearch(start, midIdx-1));
      binarySearch(start, midIdx-1)
    }
    if(midIdx+1 <= end) {
      // rootTree.insert(binarySearch(midIdx+1, end));
      binarySearch(midIdx+1, end)
    }
    return allValues[midIdx];
  }

  binarySearch(0, allValues.length-1);
  for(var i = 0; i< queue.length; i++) {
    this.insert(queue[i]);
  }
  // queue.forEach(function(val) {
  //   this.insert(val);
  // })

}

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
  if(this.root) {
    // console.log(this)
    var minMax = this.findDepth();

    // when max is more than twice the min
    if(minMax.max > (minMax.min * 2)) {
      this.rebalance();
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
    this.left.depthFirstLog(callback);
  }
  if(this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

binaryMethods.breadthFirstLog = function() {
  var queue = [];
  // log this
  var currentNode = this;
  while(currentNode) {
    // console.log(currentNode.value);

    if(this.left !== null) {
      queue.push(currentNode.left);
    }
    if(this.right !== null) {
      queue.push(currentNode.right);
    }
    currentNode = queue.shift();
  }
};

var breadthTester = function() {
  var breadthTree = BinarySearchTree(10, true);


  /*
    BreadthFirstLog Test
  */
  // breadthTree.insert(2);
  // breadthTree.insert(6);
  // breadthTree.insert(1);
  // breadthTree.insert(3);
  // breadthTree.insert(5);
  // breadthTree.insert(7);

  /*
        4
      2    6
    1  3  5  7

    -->

    4, 2, 6, 1, 3, 5, 7
  */

  // breadthTree.breadthFirstLog();

  /*
    rebalance Test
  */
  /*
        10
      8      49
     7  9   13 50
    6
  1

        10
       9   11
      8
     7
    6
   5
  4
 3
 [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  */
  // console.log('initial:', breadthTree);
  breadthTree.insert(11);
  // console.log('11:', breadthTree);
  breadthTree.insert(9);
  // console.log('9:', breadthTree);
  breadthTree.insert(8);
  // console.log('8:', breadthTree);
  breadthTree.insert(7);
  // console.log('7:', breadthTree);
  breadthTree.insert(6);
  // console.log('6:', breadthTree);
  breadthTree.insert(5);
  // console.log('5:', breadthTree);
  breadthTree.insert(4);
  // console.log('4:', breadthTree);
  breadthTree.insert(3);
  // console.log('3:', breadthTree);
  breadthTree.insert(2);
  // console.log('2:', breadthTree);
  breadthTree.insert(1);
  // console.log('1:', breadthTree);
  breadthTree.insert(0);
  // console.log('0:', breadthTree);

}

breadthTester();

/* Complexity: What is the time complexity of the above functions?

  insert:logN
  contains: logN
  depthFirstLog:linear

 */
