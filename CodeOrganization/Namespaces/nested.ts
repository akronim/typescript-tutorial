namespace FirstLevel {
  export class Example {
    log() {
      console.log("Logging from FirstLevel.Example.log()");
    }
  }

  // export keyword marks a namespace member as public
  export namespace SecondLevel {
    export class Example {
      log() {
        console.log("Logging from FirstLevel.SecondLevel.Example.log()");
      }
    }
  }
}



const nested = new FirstLevel.SecondLevel.Example();
nested.log();