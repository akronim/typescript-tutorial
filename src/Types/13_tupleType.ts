// A tuple type uses an array, and specifies the type of elements based
// on their position.
namespace TupleType {
  let poem: [number, boolean, string];

  // OK
  poem = [1, true, "love"];

  // tuple - fixed length and fixed type
  poem[1] = false;

  // Error: 'string' is not assignable to 'number'
  // poem = ["my", true, "love"];

  console.log({ poem });
}
