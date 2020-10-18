// Binary operators: - * / % << >> >>> & ^ |

var TUTORIAL = TUTORIAL || {};

TUTORIAL.binaryOperators = (function () {
  // 6: number
  const num1 = 5 + 1;
  // '51': string
  const str1 = 5 + "1";

  const str2: string = "5";

  // 5: number
  const num2 = +str2;

  // -5: number
  const negative = -str2;

  const a: any = "true";
  const isActive: boolean = true;
  

  const x = a + isActive;
  console.log(x);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
