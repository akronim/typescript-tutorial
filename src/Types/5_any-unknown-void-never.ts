namespace AnyType {
  // any - avoid it!!!
  let anyType: any;

  anyType = ["Sports", "Cooking", 123, true];
}

// unknown
// to describe the type of variables that we do not know
// when we are writing an application

namespace UnknownType {
  let userInput: unknown; // better than any
  userInput = 5;
  userInput = "Max";

  let userName: string;

  if (typeof userInput === "string") {
    console.log((userName = userInput));
  }
}

namespace VoidType {
  function warnUser(): void {
    console.log("This is my warning message");
  }

  warnUser();
}

// never - represents the type of values that never occur

namespace NeverType {
  // never returns anything
  function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true){}
  }

  generateError("An error occured", 500);
}
