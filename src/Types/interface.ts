namespace Interfaces {
  interface PersonInterface {
    name: string;
    heightInCentimeters: number;
  }
  const sherlock: PersonInterface = {
    name: "Bendict",
    heightInCentimeters: 183,
  };
}
