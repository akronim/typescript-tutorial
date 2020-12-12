namespace ArrowFunctions {
  const shortAddNumbers = (a: number, b: number) => a + b;

  const mediumAddNumbers = (a: number, b: number) => {
    return a + b;
  };

  const longAddNumbers = function (a: number, b: number) {
    return a + b;
  };

  console.log(shortAddNumbers(2, 3));
  console.log(mediumAddNumbers(2, 3));
  console.log(longAddNumbers(2, 3));

  // Wrapping an object in parentheses
  const makeName = (f: string, l: string) => ({ first: f, last: l });

  let name = makeName("Mirko", "Spirko");
  console.log(name);
}

// Preserving scope with arrow syntax
namespace PreservingScope {
  // const scopeLosingExample = {
  //   text: "Property from lexical scope",
  //   run: function () {
  //     setTimeout(function () {
  //       console.log(this.text);
  //     }, 1000);
  //   },
  // };

  // // alerts undefined
  // scopeLosingExample.run();

  const scopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
      setTimeout(() => {
        console.log(this.text);
      }, 1000);
    },
  };

  // Behind the scenes ...
  //   var scopePreservingExample = {
  //     text: "Property from lexical scope",
  //     run: function () {
  //       var _this = this;
  //       setTimeout(function () {
  //         console.log(_this.text);
  //       }, 1000);
  //     },
  //   };

  // alerts "Property from lexical scope"
  scopePreservingExample.run();
}
