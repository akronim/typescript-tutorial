var TUTORIAL = TUTORIAL || {};

// An abstract class can be used as a base class, 
// but can’t be instantiated directly.

TUTORIAL.abstractClasses = (function () {
  // Abstract class
  abstract class Logger {
    abstract notify(message: string): void;

    // can contain implemented metho
    protected getMessage(message: string): string {
      return `Information: ${new Date().toUTCString()} ${message}`;
    }
  }

  class ConsoleLogger extends Logger {
    notify(message) {
      console.log(this.getMessage(message));
    }
  }

  class InvasiveLogger extends Logger {
    notify(message) {
      console.log(this.getMessage(message));
    }
  }

  let logger: Logger;

  // Error. Cannot create an instance of an abstract class
  // logger = new Logger();

  // Create an instance of a sub-class
  logger = new InvasiveLogger();

  logger.notify("Hello World");

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
