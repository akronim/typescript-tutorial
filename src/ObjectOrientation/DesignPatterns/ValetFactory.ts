import {
  BasicBodyCleaning,
  BodyCleaning,
  ExecutiveBodyCleaning,
} from "./BodyCleaning";
import {
  BasicWheelCleaning,
  ExecutiveWheelCleaning,
  WheelCleaning,
} from "./WheelCleaning";

// Abstract factory 
// - an interface that describes the operations each concrete factory can perform
export interface ValetFactory {
  getWheelCleaning(): WheelCleaning;
  getBodyCleaning(): BodyCleaning;
}

// Concrete factories
export class BronzeWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new BasicWheelCleaning();
  }
  getBodyCleaning() {
    return new BasicBodyCleaning();
  }
}
export class SilverWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new BasicWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}
export class GoldWashFactory implements ValetFactory {
  getWheelCleaning() {
    return new ExecutiveWheelCleaning();
  }
  getBodyCleaning() {
    return new ExecutiveBodyCleaning();
  }
}
