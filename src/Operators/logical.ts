namespace NotOperator {
  // NOT
  const truthyString = "Truthy string";

  let falseyString: string = "";

  // False, it checks the string but inverts the truth
  const invertedTest = !truthyString;

  // True, the string is not undefined or empty
  const truthyTest = !!truthyString;

  // False, the string is empty
  const falseyTest = !!falseyString;

  // Falsey concept
  // • undefined
  // • null
  // • false: boolean
  // • '': string (empty string)
  // • 0: number
  // • NaN (the JavaScript Not a Number value)

  var myProperty;
  if (myProperty) {
    // Reaching this location means that myProperty is NOT ...
    // null
    // undefined
    // boolean false
    // an empty string
    // the number 0
    // NaN
  }
}

namespace AndOperator {
  // longhand
  if (console) {
    console.log("Console Available");
  }

  // shorthand
  console && console.log("Console Available");

  const player1 = "Martin";

  // player2 is only defined if player1 is defined
  const player2 = player1 && "Dan";

  // 'Dan'
  console.log(player2);
}

namespace OrOperator {
  // Empty strings are falsey
  let errorMessages = "";

  // result is 'Saved OK'
  let result = errorMessages || "Saved OK";

  // Filled strings are truthy
  errorMessages = "Error Detected";

  // result is 'Error Detected'
  result = errorMessages || "Saved OK";

  let undefinedLogger;

  // if the logger isn't initialized, substitute it for the result
  // of the right-hand expression

  const logger = undefinedLogger || {
    log: function (msg: string) {
      console.log(msg);
    },
  };

  // logs 'Message'
  logger.log("Message");
}

namespace ShortCircuit {
  interface Caravan {
    rooms: number;
  }

  let caravan: Caravan = { rooms: 2 };

  if (caravan && caravan.rooms > 5) {
    //...
  }
}

namespace ConditionalOperator {
  const isValid = true;
  // Conditional operator
  const message = isValid ? "Okay" : "Failed";
}
