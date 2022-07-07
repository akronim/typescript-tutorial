namespace RealMixinsFull {
  type Constructor<T = {}> = new (...args: any[]) => T;

  function Sings<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      sing() {
        console.log("Singing");
      }
    };
  }

  function Dances<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      dance() {
        console.log("Dancing");
      }
    };
  }
  function Acts<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
      act() {
        console.log("Acting");
      }
    };
  }
  class Person {
    constructor(private name: string) {}
  }
  const Actor = Acts(Person);
  const AllRounder = Acts(Sings(Dances(Person)));
  const actor = new Actor("Alan");
  actor.act();
  const allRounder = new AllRounder("Gene");
  allRounder.act();
  allRounder.dance();
  allRounder.sing();
}
