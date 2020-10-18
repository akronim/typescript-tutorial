var TUTORIAL = TUTORIAL || {};

// To reduce the amount of effort required to create similar types that differ 
// only in optionality, or readability, mapped types allow you to create 
// variations of an existing type in a single expression. Mapped types use the
// keyof keyword, which is an index type query that gathers a list of permitted 
// property names for a type in your program.

TUTORIAL.mappedTypesProblem = (function () {
  interface Options {
    material: string;
    backlight: boolean;
  }
  // Manually created readonly interface
  interface ManualReadonlyOptions {
    readonly material: string;
    readonly backlight: boolean;
  }
  // Manually created optional interface
  interface ManualOptionalOptions {
    material?: string;
    backlight?: string;
  }
  // Manually created nullable interface
  interface ManualNullableOptions {
    material: string | null;
    backlight: string | null;
  }

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();

TUTORIAL.mappedTypesSolution = (function () {
  interface Options {
    material: string;
    backlight: boolean;
  }
  // Mapped types
  type ReadOnly<T> = { readonly [k in keyof T]: T[k] };
  type Optional<T> = { [k in keyof T]?: T[k] };
  type Nullable<T> = { [k in keyof T]: T[k] | null };

  // Creating new types from mapped types
  type ReadonlyOptions = Readonly<Options>;
  type OptionalOptions = Optional<Options>;
  type NullableOptions = Nullable<Options>;


  // Using mapped types

  // Read-only type
  const options1: ReadonlyOptions = {
    backlight: true,
    material: "plastic",
  };

  // Error. Property is read-only
  // options1.backlight = false;

  // Optional type
  const options2: OptionalOptions = {
    // All members are optional
  };

  // Nullable type
  const options3: NullableOptions = {
    backlight: null,
    material: null,
  };

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
