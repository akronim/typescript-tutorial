// Passing a function as an argument
namespace Callbacks_1 {
  // The callback parameter has a type annotation that restricts the
  // functions that can be passed to only those that accept a string argument.
  function go(callback: (arg: string) => void) {
    // When you use call, you must supply a variable that will be used to set
    // the context of the this keyword within the callback.
    callback.call(this, "Example Argument");

    // You can also use the apply method
    callback.apply(this, ["Example Argument"]);

    // This technique doesn’t allow the context to be set
    callback("Example Argument");
  }
  function callbackFunction(arg: string) {
    console.log(arg);
  }
  go(callbackFunction);
}

namespace Apply_1 {
  const numbers = [3, 11, 5, 7, 2];

  const max1 = Math.max(...numbers);
  console.log(max1);

  // A solid way to find the maximum
  // Because you aren’t using apply to modify the scope,
  // you can pass null as the first argument.
  const max2 = Math.max.apply(null, numbers);

  // 11
  console.log(max2);
}
