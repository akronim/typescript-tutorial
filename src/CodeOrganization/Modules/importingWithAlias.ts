// Import using an alias
import { Ship as Boat } from "./modules";

export class Dock {
  private dockedShips: Boat[] = [];
  arrival(ship: Boat) {
    this.dockedShips.push(ship);
  }

  print(text: string) {
    console.log(text);
  }
}

new Dock().print("DOCK");
