interface Foo {
  foo: string;
  bar: number;
  baz: boolean;
}

type PartialFoo = Partial<Omit<Foo, "foo" | "baz">>;

let partialFoo: PartialFoo = {};
partialFoo.bar = 3;
console.log(partialFoo);

// e2
interface Test {
  a: string;
  b: number;
  c: boolean;
}

// Omit a single property:
type OmitA = Omit<Test, "a">; // Equivalent to: {b: number, c: boolean}
const newLocal = { a: "A", b: 3, c: true };
const omitA: OmitA = newLocal;
console.log(omitA);

// Or, to omit multiple properties:
type OmitAB = Omit<Test, "a" | "b">; // Equivalent to: {c: boolean}

(function () {
  let x = { a: 1, b: 2, c: 3, z: 26 };
  let { b, ...y } = x;
  console.log(y);
})();
