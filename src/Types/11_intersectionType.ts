var TUTORIAL = TUTORIAL || {};

// An intersection type combines several different types into a single supertype
// that includes the members from all participating types.

TUTORIAL.intersectionType = (function () {
  interface Skier {
    slide(): void;
  }
  interface Shooter {
    shoot(): void;
  }
  type Biathelete = Skier & Shooter;

  let biathelete : Biathelete = null;
  biathelete.shoot();
  biathelete.slide();

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
