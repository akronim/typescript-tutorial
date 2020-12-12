namespace Destructuring {
  const triangles = [1, 3, 6, 10, 15, 21];

  // Destructuring
  var [first, second] = triangles;

  // 1
  console.log(first);
  // 3
  console.log(second);

  // Example 2 - Array destructuring with a rest parameter
  // Destructuring with a rest argument
  var [first, second, ...remaining] = triangles;

  // 1
  console.log(first);

  // 3
  console.log(second);

  // [6, 10, 15, 21]
  console.log(remaining);

  // Example 3 - Skipping items
  // Skipping third item
  var [first, second, , fourth] = triangles;
  // 1
  console.log(first);
  // 3
  console.log(second);
  // [10]
  console.log(fourth);

  // Example 4 - Variable swapping
  let a = 3;
  let b = 5;
  // Swapping
  [a, b] = [b, a];
  // 5
  console.log(a);
  // 3
  console.log(b);

  // Example 5 - Object destructuring
  const highSchool = { school: "Central High", team: "Centaurs" };
  // Object destructuring
  const { school: s, team: t } = highSchool;
  // 'Central High'
  console.log(s);
  // 'Centaurs'
  console.log(t);

  // Example 6
  // Auto-unpacking
  const { school, team } = highSchool;
  // 'Central High'
  console.log(school);
  // 'Centaurs'
  console.log(team);

  // Example 7 - Object destructuring with rest parameter
  const pets = { cat: "Pickle", dog: "Berkeley", hamster: "Hammy" };
  // Object destructuring
  const { dog, ...others } = pets;
  // 'Berkeley'
  console.log(dog);
  //  Object { cat: 'Pickle', hamster: 'Hammy'}
  console.log(others);

  // Example 8 - Undefined result
  const newTriangles = [1, 3, 6];
  // Destructuring past available values
  var [first, second, third, fourth] = newTriangles;
  // undefined
  console.log(fourth);

  // Example 9 - Default values
  // Destructuring past available values
  var [first, second, third = -1, fourth = -1] = newTriangles;
  // 6
  console.log(third);
  // -1
  console.log(fourth);

  // Example 10 - Tuples and Destructuring
  // Returning a tuple
  function getThreeLandmarks(): [string, string, string] {
    return ["Golden Gate Bridge", "Palace of Westminster", "Colosseum "];
  }
  // Destructuring the tuple into named variables
  const [sanFrancisco, london, rome] = getThreeLandmarks();
}
