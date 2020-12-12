// - a powerful way of defining contracts within your code as well as
//      contracts with code outside of your project
// - can be used to define any structure in your TypeScript program
// - used at design time to provide autocompletion and at compile time
//      to provide type checking

namespace Interfaces {
  interface LabeledValue {
    label: string;
  }

  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }

  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
}

namespace Interfaces {
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
}

// Optional Properties
namespace Interfaces {
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
}

// Readonly properties
namespace Interfaces {
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5; // error!
}

// Extending Interfaces
namespace Interfaces {
  interface Shape {
    color: string;
  }

  interface Square extends Shape {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
}

// Function Types
namespace Interfaces {
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
}

// Hybrid Types
// - an object that acts as both a function and an object,
// with additional properties
namespace Interfaces {
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
}

// You can describe hybrid types with an interface,
// such as a function/object hybrid type
namespace Interfaces {
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
}

// An interface can inherit from a class in the same way
// a subclass can inherit from a superclass.

// <div id="myId"></div>
