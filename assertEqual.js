const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    let isComparable = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isComparable = false;
      }
    }
    if (isComparable) {
      console.log(`Assert succeeded: ${actual} = ${expected}`);
    } else {
      console.log(`Assert failed: ${actual} != ${expected}`);
    }
  } else if (actual === expected) {
    console.log(`Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`Assert failed: ${actual} != ${expected}`);
  }
};

assertEqual("Lol","Lol");
assertEqual(5,4);
assertEqual(3,3);
assertEqual("lmao","LMAO");
assertEqual([5,4,3],[5,4,3]);