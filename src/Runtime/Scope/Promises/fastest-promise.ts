namespace FastestPromises {
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

  Promise.race([
    FictitiousAPI.getData(1),
    FictitiousAPI.getData(2),
    FictitiousAPI.getData(3),
    FictitiousAPI.getData(4),
  ])
    .then((data) => {
      console.log(data.name);
    })
    .catch((error) => {
      console.log("Caught " + error);
    });
}
