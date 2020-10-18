var TUTORIAL = TUTORIAL || {};

TUTORIAL.typeAssertions = (function () {
  let code: any = 123;
  let employeeCode = <number>code;
  console.log(typeof employeeCode); //Output: number

  // Example 2
  interface Employee {
    name: string;
    code: number;
  }

  let employee = <Employee>{
    // Compiler will provide autocomplete properties,
    // but will not give an error if you forgot to add the properties
  };

  employee.name = "John"; // OK
  console.log(employee.code); // undefined;

  // two ways to do type assertion in TypeScript:
  // 1) using the angular bracket <> syntax
  let codeA: any = 123;
  let employeeCodeA = <number>codeA;

  // 2) using as keyword
  let codeB: any = 123;
  let employeeCodeB = codeB as number;

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
