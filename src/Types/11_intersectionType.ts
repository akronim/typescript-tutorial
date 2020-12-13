// An intersection type combines several different types into a single supertype
// that includes the members from all participating types.

namespace IntersectionType {
  interface Skier {
    slide(): void;
  }
  interface Shooter {
    shoot(): void;
  }
  type Biathelete = Skier & Shooter;

  let biathelete: Biathelete = {
    slide: () => {
      console.log("sliding");
    },
    shoot: () => {
      console.log("shooting");
    },
  };
  biathelete.shoot();
  biathelete.slide();
}
