interface NestedObject {
  name: string;
  value: number;
  children?: NestedObject[];
}

const nestedObjects: NestedObject[] = [
  {
    name: "First Parent",
    value: 100,
    children: [
      {
        name: "First Child",
        value: 110,
      },
      {
        name: "Second Child",
        value: 120,
        children: [
          {
            name: "First Grandchild",
            value: 121,
          },
          {
            name: "Second Grandchild",
            value: 122,
          },
        ],
      },
    ],
  },
  {
    name: "Second Parent",
    value: 200,
    children: [
      {
        name: "First Child",
        value: 210,
      },
      {
        name: "Second Child",
        value: 220,
      },
      {
        name: "Third Child",
        value: 230,
        children: [
          {
            name: "First Grandchild",
            value: 231,
          },
        ],
      },
    ],
  },
];

const totalValues = (nestedObjects: NestedObject[]) => {
  return nestedObjects.reduce(
    (totalValue, nestedObject: NestedObject): number => {
      // Add the current object's value
      totalValue += nestedObject.value;

      // If we have children, let's add their values too
      if (nestedObject.children) {
        totalValue += totalValues(nestedObject.children);
      }

      // Return the new total
      return totalValue;
    },
    0
  );
};

const totalValue = totalValues(nestedObjects);

console.log('Total value:', totalValue);
console.log('Value is correct:', totalValue === 1664);
