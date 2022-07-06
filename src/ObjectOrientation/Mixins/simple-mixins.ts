// Mixin enabler function - the function to apply the mixins
// This function walks the instance members of each
// of the mixin classes passed in the baseCtors array 
// and adds each of them to the derivedCtor class.
export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

/*
Mixins look a little bit like multiple inheritance. Multiple inheritance is
not permitted in TypeScript. The key to mixins is the use of 
the implements keyword, rather than the extends
keyword, which makes them like interfaces rather than superclasses.


The following scenarios are good candidates for using mixins:
• Composing classes with optional features, mixins are options.
• Reusing the same behavior on many classes.
• Creating many variations based on similar lists of features.
*/

// Reusable classes
class Sings {
  public singsMessage = "Singing";

  sing() {
    console.log(this.singsMessage);
    return "Singing";
  }
}
class Dances {
  public static dancesMessage = "I'm dancing";

  dance() {
    console.log(Dances.dancesMessage);
  }
}
class Acts {
  act() {
    console.log("Acting");
  }
}

// To make these mixins useful, you need to compose
// them into usable augmented classes.

// Composing classes
class Actor implements Acts {
  act!: () => void; // supply temporary properties
}
applyMixins(Actor, [Acts]);

class AllRounder implements Acts, Dances, Sings {
  act!: () => void;

  dance!: () => void;

  public singsMessage!: string;
  sing!: () => string;
}
applyMixins(AllRounder, [Acts, Dances, Sings]);

// Using the classes
const actor = new Actor();
actor.act();

const allRounder = new AllRounder();

allRounder.act();

allRounder.dance();

allRounder.singsMessage = "I'm singing!";
allRounder.sing();
