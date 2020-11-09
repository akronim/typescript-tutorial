var TUTORIAL = TUTORIAL || {};

TUTORIAL.enums = (function () {
  enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car,
    Van,
    Bus,
    Lorry,
  }
  const type = VehicleType.Lorry;
  const typeName = VehicleType[type]; // 'Lorry'

  // Example 2
  const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: 2,
  };

  enum Role {
    ADMIN = 0,
    READ_ONLY = 1,
    AUTHOR = 2,
  }

  if (person.role === Role.AUTHOR) {
    console.log(person.role);       // 2
    console.log(Role[person.role]); // AUTHOR
  }

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
