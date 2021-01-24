namespace MultiplePromises {
  interface FictitiousData {
    id: number;
    name: string;
  }

  class FictitiousAPI {
    static data: { [index: number]: FictitiousData } = {
      1: { id: 1, name: "Aramis" },
      2: { id: 2, name: "Athos" },
      3: { id: 3, name: "Porthos" },
      4: { id: 4, name: "D'Artagnan" },
    };

    static getData(id: number) {
      return new Promise(
        (
          fulfil: (data: FictitiousData) => void,
          reject: (reason: string) => void
        ) => {
          // Simulating async data access with a timeout
          window.setTimeout(() => {
            const result = this.data[id];
            if (typeof result == "undefined") {
              reject("No matching record");
            }
            fulfil(result);
          }, 200);
        }
      );
    }
  }

  Promise.all([
    FictitiousAPI.getData(1),
    FictitiousAPI.getData(2),
    FictitiousAPI.getData(3),
    FictitiousAPI.getData(4),
    // FictitiousAPI.getData(5),
  ])
    .then((values) => {
      // No matter how long each individual promise takes to fulfill,
      // the values passed in the then block will be ordered the same
      // as the promises that were passed in.
      for (let val of values) {
        console.log(val.name);
      }
    })
    .catch((error) => {
      console.log("Caught " + error);
    });
}
