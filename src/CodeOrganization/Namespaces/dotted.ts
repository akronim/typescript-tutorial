namespace FirstNamespace {
  export class Example {
    log() {
      console.log("Logging from FirstNamespace.Example.log()");
    }
  }
}

namespace FirstNamespace.SecondNamespace {
  export class Example {
    log() {
      console.log("Logging from FirstNamespace.SecondNamespace.Example.log()");
    }
  }
}
const dotted = new FirstNamespace.SecondNamespace.Example();
dotted.log();
