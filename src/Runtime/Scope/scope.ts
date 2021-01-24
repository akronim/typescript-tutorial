/*
Use the const keyword for all variables, and only open a variable to reassignment 
with the let keyword if you decide to allow it.
*/

namespace Scope_1 {
  var scope = 1;

  {
    var scope = 2;

    console.log("Inner: " + scope);
  }

  console.log("Outer: " + scope);
}

namespace Scope_2 {
  var scope = 1;

  // The function creates a new context, making the inner scope variable
  // independent of the outer scope variable.
  (function () {
    var scope = 2;
    console.log("Inner: " + scope);
  })();

  console.log("Outer: " + scope);
}

namespace Scope_3 {
  const scope = 1;

  {
    const scope = 2;
    // Inner: 2
    console.log("Inner: " + scope);
  }

  // Outer: 1
  console.log("Outer: " + scope);
}
