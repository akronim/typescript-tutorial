import {
  BodyCleaning,
  BasicBodyCleaning,
  ExecutiveBodyCleaning,
} from "./BodyCleaning";
import { BronzeWashFactory, GoldWashFactory, ValetFactory } from "./ValetFactory";
import {
  WheelCleaning,
  BasicWheelCleaning,
  ExecutiveWheelCleaning,
} from "./WheelCleaning";

/*

  // This is a typical example of a class that knows too much.

  class CarWashProgram {
  constructor(private washLevel: number) {}
  runWash() {
    let wheelWash: WheelCleaning;
    let bodyWash: BodyCleaning;
    switch (this.washLevel) {
      case 1:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new BasicBodyCleaning();
        bodyWash.cleanBody();
        break;
      case 2:
        wheelWash = new BasicWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
      case 3:
        wheelWash = new ExecutiveWheelCleaning();
        wheelWash.cleanWheels();
        bodyWash = new ExecutiveBodyCleaning();
        bodyWash.cleanBody();
        break;
    }
  }
}*/

// Abstract factory pattern in use
class CarWashProgram {
    constructor(private cleaningFactory: ValetFactory) {
    }
    runWash() {
        const wheelWash = this.cleaningFactory.getWheelCleaning();
        wheelWash.cleanWheels();
        const bodyWash = this.cleaningFactory.getBodyCleaning();
        bodyWash.cleanBody();
    }
}

// new CarWashProgram(new GoldWashFactory()).runWash();
