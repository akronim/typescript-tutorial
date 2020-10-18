var TUTORIAL = TUTORIAL || {};

TUTORIAL.incrementDecrement = (function () {
  let counter = 0;
  do {
    ++counter;
  } while (counter < 10);

  enum Size {
    S,
    M,
    L,
    XL,
  }
  var size = Size.S;
  ++size;
  console.log(Size[size]); // M
  var size = Size.XL;
  --size;
  console.log(Size[size]); // L
  var size = Size.XL;
  ++size;
  console.log(Size[size]); // undefined

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
