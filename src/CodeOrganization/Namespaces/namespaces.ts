// A namespace creates a context for identifiers, reducing naming collisions 
// in your program and providing a mechanism to organize your code into logical 
// schemes. A namespace adds only one item to the global scope; and this item 
// provides a hierarchical mechanism for accessing everything that is made public 
// within the namespace.

// prefer modules over namespaces !!!

namespace First {
  export class Example {
    log() {
      console.log("Logging from First.Example.log()");
    }
  }
}

namespace Second {
  export class Example {
    log() {
      console.log("Logging from Second.Example.log()");
    }
  }
}

const first = new First.Example();

// Logging from First.Example.log()
first.log();

const second = new Second.Example();

// Logging from Second.Example.log()
second.log();
