var TUTORIAL = TUTORIAL || {};

TUTORIAL.interfaces = (function () {
  interface PersonInterface {
    name: string;
    heightInCentimeters: number;
  }
  const sherlock: PersonInterface = {
    name: "Bendict",
    heightInCentimeters: 183,
  };

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
