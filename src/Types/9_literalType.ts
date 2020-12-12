// literal types
namespace LiteralTypes {
  // String literal type
  type Kingdom =
    | "Bacteria"
    | "Protozoa"
    | "Chromista"
    | "Plantae"
    | "Fungi"
    | "Animalia";

  let kingdom: Kingdom;

  // OK
  kingdom = "Bacteria";

  // Error: Type 'Protista' is not assignable to type 'Kingdom'
  // kingdom = "Protista";

  // Number literal type
  type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;

  let num: Fibonacci;

  // OK
  num = 8;

  // Error: Type '9' is not assignable to type 'Fibonacci'
  // num = 9;

  // Hybrid union/literal type
  type Randoms = "Text" | 10 | false;

  let random: Randoms;

  // OK
  random = "Text";
  random = 10;
  random = false;

  // Error: Not assignable.
  // random = "Other String";
  // random = 12;
  // random = true;

  function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text" // !
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }

    return result;
  }

  const combinedAges = combine(30, 26, "as-number");
  console.log(combinedAges);

  const combinedStringAges = combine("30", "26", "as-number");
  console.log(combinedStringAges);

  const combinedNames = combine("Max", "Anna", "as-text");
  console.log(combinedNames);
}
