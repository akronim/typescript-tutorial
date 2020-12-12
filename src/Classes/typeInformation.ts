var TUTORIAL = TUTORIAL || {};

TUTORIAL.typeInformationInstanceof = (function () {
  class Display {
    name: string = "";
  }

  class Television extends Display {}

  class HiFi {}

  const display = new Display();

  const television = new Television();

  const hiFi = new HiFi();

  let isDisplay;

  // true
  isDisplay = display instanceof Display;
  console.log(isDisplay);

  // true (inherits from Display)
  isDisplay = television instanceof Display;
  console.log(isDisplay);

  // false
  isDisplay = hiFi instanceof Display;
  console.log(isDisplay);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// we can test for the presence of a name property
TUTORIAL.typeInformationIn = (function () {
  class Display {
    name: string = "";
    size!: number;
  }

  class Television extends Display {}

  class HiFi {}

  const display = new Display();

  const television = new Television();

  const hiFi = new HiFi();

  let hasName;

  // true
  hasName = "name" in display;
  console.log(hasName);

  // true
  hasName = "name" in television;
  console.log(hasName);

  // false
  hasName = "name" in hiFi;
  console.log(hasName);

  let hasSize;

  // false - the size property is never initialized
  hasSize = "size" in display;
  console.log(hasSize);

  // false - the size property is never initialized
  hasSize = "size" in television;
  console.log(hasSize);

  // false - the size property is never initialized
  hasSize = "size" in hiFi;
  console.log(hasSize);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
