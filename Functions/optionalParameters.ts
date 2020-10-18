var TUTORIAL = TUTORIAL || {};

TUTORIAL.optionalParameters = (function () {
  // Optional parameters must be located after any required
  // parameters in the parameter list.
  function getAverage(a: number, b: number, c?: number): string {
    let total = a;
    let count = 1;

    total += b;
    count++;

    // When you use an optional parameter, you must check the value 
    // to see if it has been initialized.
    if (typeof c !== "undefined") {
      total += c;
      count++;
    }

    const average = total / count;

    return "The average is " + average;
  }
  // 'The average is 5'
  const result = getAverage(4, 6);
  console.log(result);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
