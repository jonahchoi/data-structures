// Instantiate a new graph
var Graph = function() {
  this.store = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //Create node, using input value as key, with empty array
  this.store[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //loop through list of keys
  for (let key in this.store) {
    //check if key equals input value -> return true
    if (parseInt(key) === node) {
      return true;
    }
  }
  //return false
  return false;

};



// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //Delete key at input value
  delete this.store[node];                              // constant
  //Loop through each object value to also erase edges
  for (let key in this.store) {                         // linear n
    for (let i = 0; i < this.store[key].length; i++) {  // linear m
      if (this.store[key][i] === node) {
        this.store[key] = this.store[key].slice(0, i).concat(this.store[key].slice(i+1));  // linear m
      }
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //Search object at key fromNode
  for (let i = 0; i < this.store[fromNode].length; i++) {
    //Check if toNode is within the value
    if (this.store[fromNode][i] === toNode) {
      return true;
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //If object has fromNode and toNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    //Add toNode to fromNode
    this.store[fromNode].push(toNode);
    //Add fromNode to toNode
    this.store[toNode].push(fromNode);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //Find fromNode, remove toNode
  for (let i = 0; i < this.store[fromNode].length; i++) {
    if (this.store[fromNode][i] === toNode) {
      this.store[fromNode] = this.store[fromNode].slice(0, i).concat(this.store[fromNode].slice(i+1));
    }
  }
  //Find toNode, remove fromNode
  for (let i = 0; i < this.store[toNode].length; i++) {
    if (this.store[toNode][i] === fromNode) {
      this.store[toNode] = this.store[toNode].slice(0, i).concat(this.store[toNode].slice(i+1));
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //Loop through object,
  for (let key in this.store) {
    //cb on node value
    cb(parseInt(key))
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
  addNode: O(1)
  contains: O(n)
  removeNode: O(n^2)
  hasEdge: O(n)
  addEdge: O(1)
  removeEdge: O(n^2)
  forEachNode: O(n)
*/

