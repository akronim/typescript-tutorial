// union types - you can specify that the value can be of more than a single type
namespace UnionTypes {
  // Type annotation for a union type
  let union: boolean | number;

  // OK: number
  union = 5;

  // OK: boolean
  union = true;

  // Error: Type "string" is not assignable to type 'number | boolean'
  // union = "string";

  // Type alias for a union type
  type StringOrError = string | Error;

  // Type alias for union of many types
  type SeriesOfTypes = string | number | boolean | Error;

  function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    return result;
  }

  const combinedAges = combine(30, 26);
  console.log(combinedAges);

  const combinedNames = combine("Max", "Anna");
  console.log(combinedNames);
}
