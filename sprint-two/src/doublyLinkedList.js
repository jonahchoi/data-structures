var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var newNode = DoubleNode(value);
    //Temp variable to save current head
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var temp = list.head;
      //Assign head to new node
      list.head = newNode;
      //head's next to old head node
      newNode.next = temp;
      //old head's previous to new head
      temp.prev = newNode;
    }
  }

  list.removeTail = function() {
    // if no tail
    if(!this.tail) {
      return null;
    }
    // temp var to store old tail
    var temp = list.tail;
    // set new tail to tail's prev
    list.tail = temp.prev;
    // old tail prev to null
    temp.prev = null;
    // new tail next to null
    list.tail.next = null;
    // return old tail value
    return temp.value;
  }

  list.addToTail = function(value) {
    var newNode = DoubleNode(value);
    //If theres no head, set input node to head and tail
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    //otherwise,
    else {
      //Add previous for newNode
      newNode.prev = list.tail;
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
    //Remove previous for newHead
    list.head.prev = null;
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

var DoubleNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

var linkTester = function() {
  var newDoubleList = DoublyLinkedList();

  newDoubleList.addToHead(1);
  console.log(newDoubleList.head);
  newDoubleList.addToHead(2);
  console.log(newDoubleList.head);
  newDoubleList.removeTail();

  console.log(newDoubleList.head);

}

// linkTester();
