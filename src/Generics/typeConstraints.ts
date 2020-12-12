// A type constraint can be used to limit the types that
// a generic function, interface, or class can operate on
namespace TypeConstraints {
  interface HasName {
    name: string;
  }

  class Personalization {
    // Type constraints are specified using the extends keyword
    static greet<T extends HasName>(obj: T) {
      return "Hello " + obj.name;
    }
  }

  let hasName: HasName = { name: "John" };
  let result = Personalization.greet(hasName);

  console.log(result);
}
