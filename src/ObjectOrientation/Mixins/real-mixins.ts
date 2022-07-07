namespace RealMixins {
  // The Constructor type is a generic type for an object with
  // a constructor that accepts zero or more arguments.
  type Constructor<T = {}> = new (...args: any[]) => T;

  // The mixin is defined in the Acts function, which extends
  // any suppled class with a message property and an act method.
  function Acts<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      message: string = "Acting";
      act() {
        console.log(this.message);
      }
    };
  }

  class Person {
    constructor(private name: string) {}
  }

  // To apply the mixin to a class, you simply call the Acts function, passing
  // the target class.
  // Whenever you call the resulting mix class, it will have its original members,
  // along with the additional members of the mixin.
  const Actor = Acts(Person);

  const actor = new Actor("Alan");

  // Acting
  actor.act();
}
