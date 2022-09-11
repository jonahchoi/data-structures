var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    //If theres no head, set input node to head and tail
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    //otherwise,
    else {
      // set current tail's next to our input value
      list.tail.next = newNode;
      //change old tail to point to new tail,
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // if no head
    if(!this.head) {
      return null;
    }
      // return null
    //Temp var to current head
    var temp = list.head.value;
    //Transfer head to head.next
    list.head = list.head.next;
    //return temp
    return temp;
  };

  list.contains = function(target) {
    //set current node to this.head
    var currentNode = list.head;
    //check current value to target

    //Loop through list, while current is not list.tail
    while(currentNode !== null) {
      //look at current node value
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//Add to tail: O(1)
//Remove head: O(1)
//Contains: O(n)