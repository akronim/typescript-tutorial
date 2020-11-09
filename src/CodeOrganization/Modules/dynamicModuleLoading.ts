// Declaration for the require function (Node)
declare function require(moduleName: string): any;

// Import - doesn't actually emit code
import Ferry from "./exportsObject";

const condition = true;

if (condition) {
  // Only imports if the condition is true
  const ferry: typeof Ferry = require("./exportsObject");
  const myFerry = new ferry("", "", 0);
}
