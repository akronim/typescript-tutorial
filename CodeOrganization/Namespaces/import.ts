///<reference path="./public-private.ts" />

namespace Docking {
  // You can use an import statement to alias an item from another namespace
  import Ship = Shipping.Ship;
  export class Dock {
    private dockedShips: Ship[] = [];
    arrival(ship: Ship) {
      this.dockedShips.push(ship);
    }
  }
}
const dock = new Docking.Dock();
