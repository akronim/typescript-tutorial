/* 
The ISP states that we should not create these big interfaces, but instead write 
a series of smaller, more specific, interfaces that are implemented by the class. 
Each interface would describe an independent grouping of behavior, allowing code 
to depend on a small interface that provides just the required behavior.
*/

namespace InterfaceSegregationPrincipleBad {
  interface Printer {
    copyDocument(): void;
    printDocument(document: Document): void;
    stapleDocument(document: Document, tray: number): void;
  }

//   class SimplePrinter implements Printer {
//     printDocument(document: Document) {
//       //...
//     }
//   }
}

namespace InterfaceSegregationPrincipleGood {
  interface Printer {
    printDocument(document: Document): void;
  }
  interface Stapler {
    stapleDocument(document: Document, tray: number): void;
  }
  interface Copier {
    copyDocument(): void;
  }
  class SimplePrinter implements Printer {
    printDocument(document: Document) {
      //...
    }
  }
  class SuperPrinter implements Printer, Stapler, Copier {
    printDocument(document: Document) {
      //...
    }
    copyDocument() {
      //...
    }
    stapleDocument(document: Document, tray: number) {
      //...
    }
  }
}
