const assertEqual = function(actual, expected) {
  if (actual === expected) {
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