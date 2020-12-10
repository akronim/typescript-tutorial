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

// e6
(function () {
  type AllKeyOf<T> = T extends never ? never : keyof T;

  type Omit<T, K> = { [P in Exclude<keyof T, K>]: T[P] };

  type Optional<T, K> = { [P in Extract<keyof T, K>]?: T[P] };

  type WithOptional<T, K extends AllKeyOf<T>> = T extends never
    ? never
    : Omit<T, K> & Optional<T, K>;

  /**
    {
         mid?: number;
         type: number;
         text?: string; 
    }
  | {
         mid?: number;
         type: number;
         url: string;
    }    
  */
  interface Message {
    mid: string;
    type: string;
    text: string;
  }

  type a = WithOptional<Message, "mid" | "text">;

  const optionalFoo: a = { mid: "???", type: "+++", text: "!!!" };

  let msg: AllKeyOf<Message>;

  //let keys = Object.keys(msg);

  type MsgKeys = keyof Message;

  let optionalFoo2: a;
  function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
})();

(function () {
  interface Animal {
    extinct: boolean;
    race: string;
  }

  function setValue<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
    obj[key] = value;
  }

  const huntsman: Animal = {
    extinct: false,
    race: "spider",
  };

  // true is a boolean value and matches the type of the "extinct" property
  // --> no error
  setValue(huntsman, "extinct", true);
  setValue(huntsman, "race", "spider");

  // 100 is a number value and does not match the type of the "extinct" property
  // --> error
  //setValue(huntsman, "extinct", 100);
})();

(function () {
  interface IUserProfile {
    id: string;
    name: string;
  }
  type KeysEnum<T> = { [P in keyof Required<T>]: true };
  const IUserProfileKeys: KeysEnum<IUserProfile> = {
    id: true,
    name: true,
  };
  console.log(IUserProfileKeys);
})();

(function () {
  class MyTableClass {
    // list the propeties here, ONLY WRITTEN ONCE
    constructor(
      readonly id?: string,
      readonly title?: string,
      readonly isDeleted?: boolean
    ) {}
  }

  console.log(Object.keys(new MyTableClass()));
})();

(function () {
  function assoc<Type, Key extends keyof Type>(
    obj: Type,
    key: Key,
    value: Type[Key]
  ) {
    return { ...obj, [key]: value };
  }

  type User = {
    id?: number;
    name?: string;
    points?: number;
  };

  let user: User = {};

  const updatedUserName = assoc(user, "name", "User Test A");
  const updatedUserPoints = assoc(user, "points", 0);

  console.log({ user });

  // The following will examples result in TypeScript complaining:

  //const updatedUserPoint = assoc(user, "point", 0);
  // Argument of type '"point"' is not assignable to parameter of type '"id" | "name" | "points"'

  //const updatedUserPointsAsString = assoc(user, "point", "0");
  // Argument of type '"0"' is not assignable to parameter of type 'number'
})();

(function () {
  interface Todo {
    title: string;
    description: string;
    foo: string;
    bar: number;
    baz: boolean;
  }

  type PartialTodo = Partial<Omit<Todo, "foo" | "baz">>;

  const todoReq = {
    title: "organize desk",
    description: "clear clutter",
    foo: "2",
    bar: 333,
  };

  const todoToUpdate = {
    title: "aaa",
    description: "bbb",
  };

  Object.keys(todoReq).map((key, index) => {
    if (["foo", "bar"].indexOf(key) > -1) delete todoReq[key];
  });

  let newObj;

  function updateTodo(todoToUpdate: PartialTodo, todoReq: PartialTodo) {
    //return { ...(todoToUpdate as Partial<Todo>), ...(todoReq as Partial<Todo>)};
    newObj = Object.assign(todoToUpdate, todoReq);
  }

  const todo2 = updateTodo(todoToUpdate, todoReq);

  console.log({ newObj });

  Object.keys(todoReq).map((k, i) => {});

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  console.log(getKeyByValue(todoReq, "organize desk"));
})();

(function () {
  // const tuple = <T extends string[]>(...args: T) => args;
  // const furniture = tuple("chair", "table", "lamp");
  // type Furniture = typeof furniture[number];

  // const arrr: string[] = Object.keys(furniture);
  // console.log({arrr});

  const furniture = ["chair", "table", "lamp"] as const;
  type Furniture = typeof furniture[number];
  const arrr: string[] = [...furniture] as string[];
  console.log({ arrr });
  console.log(arrr.indexOf("table"));

  const doms = {
    a: "",
    div: "",
    par: "",
  };

  type DOMType = keyof typeof doms;

  const arr: string[] = Object.keys(doms);
  console.log(arr.indexOf("div"));
})();

(function () {
  interface Foo {
    foo: string;
    bar: number;
    baz: boolean;
  }

  type PartialFoo = Partial<Pick<Foo, "foo" | "baz">>;

  type FooKeys = keyof PartialFoo;

  const req = { foo: "foo", bar: 1, baz: true };

  let partialFoo: PartialFoo = {};

  Object.keys(req).map((key, index) => {
    let a: FooKeys = req[key];
    console.log(a);
  });

  
  console.log({ partialFoo });

})();

(function () {
  let x = { a: 1, b: 2, c: 3, z: 26 };
  let { b, ...y } = x;
  console.log(y);
})();
