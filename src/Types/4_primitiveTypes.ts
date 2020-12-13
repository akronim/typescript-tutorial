namespace PrimitiveTypes {
  // Boolean
  let isDone: boolean = false;

  // Number
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  // let big: bigint = 100n;

  // String
  let color: string = "blue";

  // Array
  let list: number[] = [1, 2, 3];

  // Symbols
  const ACADEMIC_TITLE = Symbol("title");
}

// tsc 4_primitiveTypes.ts --outFile ../app.js --watch
