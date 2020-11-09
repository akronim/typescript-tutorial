var TUTORIAL = TUTORIAL || {};

TUTORIAL.anyType = (function () {
  // any - avoid it!!!
  let anyType: any;

  anyType = ["Sports", "Cooking", 123, true];

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// unknown
// to describe the type of variables that we do not know
// when we are writing an application

TUTORIAL.unknownType = (function () {
  let userInput: unknown; // better than any
  userInput = 5;
  userInput = "Max";

  let userName: string;

  if (typeof userInput === "string") {
    console.log((userName = userInput));
  }

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

TUTORIAL.voidType = (function () {
  function warnUser(): void {
    console.log("This is my warning message");
  }

  warnUser();

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// never - represents the type of values that never occur

TUTORIAL.neverType = (function () {
  // never returns anything
  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true){}
  }

  generateError("An error occured", 500);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
