// Import entire module
import * as Shipping from "./modules";
export class Dock {
  private dockedShips: Shipping.Ship[] = [];
  arrival(ship: Shipping.Ship) {
    this.dockedShips.push(ship);
  }
}
