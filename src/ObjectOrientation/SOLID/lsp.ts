/* 
Replacing an instance of a class with its child class should not produce 
any negative side effects.

Testing the type of an object is a good indicator of an LSP violation
*/

namespace LiskovSubstitutionPrincipleBad {
  abstract class CustomError {
    error: Error;
    errorMessage: string;
    constructor(error: Error) {
      this.error = error;
    }
    abstract createErrorMessage(): void;
    abstract logError(): void;
  }

  class ConnectionError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `Connection error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
  }

  class DBError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `DB error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
    createAlert(): void {
      console.log("Alert Sent");
    }
  }

  const errorHandler = (customError: CustomError) => {
    customError.createErrorMessage();
    customError.logError();
    if (customError instanceof DBError) {
      customError.createAlert();
    }
  };

  const main = () => {
    const dbError = new DBError(new Error("DB err1"));
    errorHandler(dbError);
  };

  main();
}

namespace LiskovSubstitutionPrincipleGood {
  abstract class CustomError {
    error: Error;
    errorMessage: string;
    constructor(error: Error) {
      this.error = error;
    }
    abstract createErrorMessage(): void;
    abstract logError(): void;
  }

  class ConnectionError extends CustomError {
    constructor(error: Error) {
      super(error);
    }
    createErrorMessage(): void {
      this.errorMessage = `Connection error: ${this.error.message}`;
    }
    logError(): void {
      console.log(this.errorMessage);
    }
  }

  class AlertSystem {
    public sendAlert(message: string) {
      console.log("Alert sent");
    }
  }

  class DBError extends CustomError {
    constructor(error: Error) {
      super(error);
    }

    createErrorMessage(): void {
      this.errorMessage = `DB error: ${this.error.message}`;
    }

    logError(): void {
      console.log(this.errorMessage);
      const alert = new AlertSystem();
      alert.sendAlert(this.errorMessage);
    }
  }

  const errorHandler = (customError: CustomError) => {
    customError.createErrorMessage();
    customError.logError();
  };

  const main = () => {
    const dbError = new DBError(new Error("DB err1"));
    errorHandler(dbError);
  };

  main();
}
