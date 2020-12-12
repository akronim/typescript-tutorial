// Currying is a process whereby a function with multiple parameters is
// decomposed into multiple functions that each take a single parameter.

// Currying with arrow functions
namespace FunctionCurrying {
  // Currying
  const multiply = (a: number) => (b: number) => a * b;

  // Pass both arguments in sequence: 30
  const numA = multiply(5)(6);

  // Pass just the first argument and re-use
  const orderOfMagnitude = multiply(10);

  // 10
  const deca = orderOfMagnitude(1);

  // 100
  const hecta = orderOfMagnitude(deca);

  // 1,000
  const kilo = orderOfMagnitude(hecta);
}

// Currying with function overloads
namespace FunctionCurrying {
  function multiply(a: number): (b: number) => number;
  function multiply(a: number, b: number): number;
  function multiply(a: number, b: number = null) {
    if (b === null) {
      return (b: number) => a * b;
    }
    return a * b;
  }

  // Pass both arguments "normally": 30
  const numA = multiply(5, 6);

  // Pass just the first argument and re-use
  const orderOfMagnitude = multiply(10);

  // 10
  const deca = orderOfMagnitude(1);

  // 100
  const hecta = orderOfMagnitude(deca);

  // 1,000
  const kilo = orderOfMagnitude(hecta);
}

// Practical currying
namespace FunctionCurrying {
  const log = (source: string) => (message: string) =>
    console.log(source, message);

  const customLog = log("Custom Log:");

  // Custom Log: Message One
  customLog("Message One");

  // Custom Log: Message Two
  customLog("Message Two");
}
