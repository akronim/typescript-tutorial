var TUTORIAL = TUTORIAL || {};

// - a powerful way of defining contracts within your code as well as
//      contracts with code outside of your project
// - can be used to define any structure in your TypeScript program
// - used at design time to provide autocompletion and at compile time
//      to provide type checking

TUTORIAL.interfaces = (function () {
  interface LabeledValue {
    label: string;
  }

  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

TUTORIAL.interfaces = (function () {
  interface Point {
    // Properties
    x: number;
    y: number;
  }
  interface Passenger {
    // Properties
    name: string;
  }
  interface Vehicle {
    // Constructor
    new (): Vehicle;
    // Properties
    currentLocation: Point;
    // Methods
    travelTo(point: Point): void;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
  }

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Optional Properties
TUTORIAL.interfaces = (function () {
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: "black" });
  console.log(mySquare);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Readonly properties
TUTORIAL.interfaces = (function () {
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5; // error!

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Extending Interfaces
TUTORIAL.interfaces = (function () {
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Function Types
TUTORIAL.interfaces = (function () {
  // To describe a function type with an interface, we give
  // the interface a call signature
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;

  mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  };

  console.log(mySearch("abc", "b"));

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// Hybrid Types
// - an object that acts as both a function and an object,
// with additional properties
TUTORIAL.interfaces = (function () {
  interface Circle {
    radius: number; //property
    (x: number, y: number): void; //function declaration
    display(b: boolean): void; //method
    [state: string]: any; //indexer
  }

  //first create function
  let c = function (x: number, y: number) {
    console.log(`center position: (${x}, ${y})`);
  };

  let circle: Circle = c as Circle; //type assertion on right side
  circle.radius = 10;
  circle.display = function (d: boolean) {
    console.log("circle displayed: " + d);
  };
  circle["interactive"] = true;
  circle["maximumRadius"] = 20;

  console.log(circle);
  circle(2, 5); // calling position function
  circle.display(true);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// You can describe hybrid types with an interface,
// such as a function/object hybrid type
TUTORIAL.interfaces = (function () {
  // Hybrid type
  interface SimpleDocument {
    (selector: string): HTMLElement;
    notify(message: string): void;
  }

  // Implementation
  const prepareDocument = function (): SimpleDocument {
    let doc = <SimpleDocument>function (selector: string) {
      return document.getElementById(selector);
    };
    doc.notify = function (message: string) {
      console.log(message);
    };
    return doc;
  };

  const $ = prepareDocument();

  // Call $ as a function
  const elem = $("myId");

  // Use $ as an object
  $.notify(elem.id);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

// An interface can inherit from a class in the same way
// a subclass can inherit from a superclass.


// <div id="myId"></div>