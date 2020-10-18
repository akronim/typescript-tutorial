// object is a type that represents the non-primitive type, 
// i.e. anything that is not 
// number, string, boolean, bigint, symbol, null, or undefined

var TUTORIAL = TUTORIAL || {};

TUTORIAL.objectType = (function () {
  const person: {
    name: string;
    age: number;
    hobbies: string[]; // array
    role: [number, string]; // tuple
  } = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// tsc objectType.ts --outFile ../app.js --watch
