namespace RestParameters {
  // Rest parameters allow calling code to specify zero or more
  // arguments of the specified type
  function getAverage(...arr: number[]): string {
    let total = arr.reduce(function (a, b) { return a + b; }, 0);
    return "The average is " + total / arr.length;
  }

  const result = getAverage(2, 4, 6, 8, 10);
  console.log(result);
}
