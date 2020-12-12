// functions
namespace Functions {
  // we can set return type explicitly: number
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }

  function printResult(num: number): void {
    console.log("Result: " + num);
  }

  printResult(add(5, 12));

  let someValue: undefined;

  // a variable can hold a functions
  let combineValues: (a: number, b: number) => number;
  combineValues = add;
  printResult(combineValues(6, 12));

  // callbacks
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  addAndHandle(10, 20, (result) => {
    console.log(result);
  });
}
