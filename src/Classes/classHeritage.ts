namespace ClassHeritage {
  class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }

  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }

  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();
}

namespace ClassHeritage2 {
  class Animal {
    name: string;
    constructor(theName: string) {
      this.name = theName;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }

  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");

  sam.move();
  tom.move(34);
}

/* 
    A method on a class can have fewer parameters than the interface specifies. 
    This allows a class to ignore arguments that it doesn’t require to execute 
    the method. Any parameters that are specified must match
    the parameters in the interface.
*/
