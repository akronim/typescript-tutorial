var TUTORIAL = TUTORIAL || {};

TUTORIAL.spreadOperator = (function () {
  // E1 - Array spreading
  const squares = [1, 4, 9, 16, 25];

  const powers = [2, 4, 8, 16, 32];

  // Array spreading
  const squaresAndPowers = [...squares, ...powers];

  // [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
  console.log(squaresAndPowers);

  // E2 - Object spreading
  const emergencyService = {
    police: "Chase",
    fire: "Marshall",
  };
  const utilityService = {
    recycling: "Rocky",
    construction: "Rubble",
  };

  // Object spreading
  const patrol = { ...emergencyService, ...utilityService };
  // { police: 'Chase', fire: 'Marshall', recycling: 'Rocky', construction: 'Rubble' }
  console.log(patrol);

  // E3 - Spread operator in function call
  function add(a?: number, b?: number, c?: number) {
    if (a && b && c) {
      return a + b + c;
    }
  }
  const hexagons = [1, 6, 15];
  // Spread operator in function call
  const result = add(...hexagons);
  // 22
  console.log(result);

  return {
    // someProperty: "prop value",
    // publicMethod: publicMethod,
  };
})();
