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

// e3
interface User {
  name: string;
  age: number;
}
//let user1: User = { name: 'aaa', age: 23 };
//let user2: User = { age: 23 }; // Property 'name' is missing in type '{ age: number; }' but required in type 'User'.
//let user3: User = { name: 'ccc' }; // Property 'age' is missing in type '{ name: string; }' but required in type 'User'.

let partialUser1: Partial<User> = { name: "aaa", age: 23 };
let partialUser2: Partial<User> = { age: 23 };
let partialUser3: Partial<User> = { name: "ccc" };

// e4
interface Demo {
  a: string;
  b: number;
  c: boolean;
  d: number;
}
type DemoCD = Omit<Demo, "a" | "b">;
let cAndD: DemoCD = {
  c: true,
  d: 34,
  // a: 'test' // Because: Type '{ c: true; d: number; a: string; }' is not assignable to type 'Pick<Test, "c" | "d">'. Object literal may only specify known properties, and 'a' does not exist in type 'Pick<Test, "c" | "d">'.
};

// e5
interface A {
  x: string;
  y: string;
}

interface B extends Omit<A, "x"> {
  x: number;
}

const t: B = { x: 3, y: "Y" };
