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
const omitA: OmitA = { /* a: "A",*/ b: 3, c: true };
console.log(omitA);

// Or, to omit multiple properties:
type OmitAB = Omit<Test, "a" | "b">; // Equivalent to: {c: boolean}


