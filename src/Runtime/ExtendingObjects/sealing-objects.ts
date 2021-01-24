namespace SealingObjects {
  let lemur: any = {
    name: "Sloth Lemur",
  };

  Object.seal(lemur);

  // new property
  lemur.isExtinct = true;

  // undefined
  console.log(lemur.isExtinct);
}
