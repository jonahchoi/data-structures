var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  // console.log(hash % max);
  return hash % max;
};
function hashCode(str, max) {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  // console.log(hash % max);
  return hash % max;
}
var hash = function(s, max) {
  /* Simple hash function. */
  var a = 1, c = 0, h, o;
  if (s) {
      a = 0;
      /*jshint plusplus:false bitwise:false*/
      for (h = s.length - 1; h >= 0; h--) {
          o = s.charCodeAt(h);
          a = (a<<6&268435455) + o + (o<<14);
          c = a & 266338304;
          a = c!==0?a^c>>21:a;
      }
  }
  return a % max;
};




var bloomFilter = function() {
  this.storage = new Array(18);

}

bloomFilter.prototype.insert = function(str) {
  //Run str through all 3 hash functions
  var hash1 = getIndexBelowMaxForKey(str, 18);
  var hash2 = hashCode(str, 18);
  var hash3 = hash(str, 18);
  //Use 3 indexes to add 1 to bitVector
  this.storage[hash1] = 1;
  this.storage[hash2] = 1;
  this.storage[hash3] = 1;

}

bloomFilter.prototype.retrieve = function(str) {
  //Run str through all 3 hash functions
  var hash1 = getIndexBelowMaxForKey(str, 18);
  var hash2 = hashCode(str, 18);
  var hash3 = hash(str, 18);

  if (this.storage[hash1] === 1 && this.storage[hash2] === 1 && this.storage[hash3] === 1) {
    return true;
  }

  return false;
  //check if all 3 indexes are 1, return true;
  //if not return false;
}

var test = new bloomFilter();
// console.log('initial:', test);

var randomStrings = ['awd', '321', 'fwefawef', 'hi', 'awefawef', 'poop', 'hsoj', 'hanoj', 'rxds'];

var getRandomString = function(array) {
  var randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}

var insertedString = ['qwe',
'123',
'josh',
'jonah',
'mnb',
'098',
'iuhiuhuih',
'popopop'];

test.insert('qwe');
test.insert('123');
test.insert('josh');
test.insert('jonah');

test.insert('mnb');
test.insert('098');
test.insert('iuhiuhuih');
test.insert('popopop');

var tester = function() {
  for(var i = 0; i < 10000; i++) {
    var trueString = getRandomString(insertedString)
    var trueTest = test.retrieve(trueString);
    if(!trueTest) {
      console.error('true but actually false:', trueString);
    }
    var falseString = getRandomString(randomStrings);
    var falseTest = test.retrieve(falseString);
    if(falseTest) {
      console.error('false but actually true:', falseString);

    }
  }
}
tester();

/*
  With 4 inputs, 1 false positive
  with 8 inputs, 4 false positives
*/

//http://127.0.0.1:8080
