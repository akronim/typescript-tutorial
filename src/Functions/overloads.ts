namespace Overloads {
  function getAverage(a: string, b: string, c: string): string;
  function getAverage(a: number, b: number, c: number): string;

  // implementation signature
  function getAverage(a: any, b: any, c: any): string {
    const total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
    const average = total / 3;
    return "The average is " + average;
  }

  // The average is 5
  const result = getAverage(4, 3, 8);
  console.log(result);
}

// Union types can probably eliminate most cases for function overloads,
// and the remaining cases can typically be replaced with optional
// or default parameters.
namespace WithoutOverloads {
  function getAverage(
    a: string | number,
    b: string | number,
    c: string | number
  ): string {
    let total;

    if (
      typeof a === "number" &&
      typeof b === "number" &&
      typeof c === "number"
    ) {
      total = a + b + c;
    } else {
      total = +a + +b + +c;
    }

    const average = total / 3;
    return "The average is " + average;
  }

  // The average is 5
  const result = getAverage(4, 3, 8);
  console.log(result);
}

namespace specializedOverloadSignatures {}
