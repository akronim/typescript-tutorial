/* 
A common use of encapsulation is data hiding: preventing access to data from 
outside of the class except via explicit operations.

You should hide your properties using the private keyword to
prevent external code changing the value or controlling the program’s flow 
using the value.
*/

namespace Encapsulation {
  class Totalizer {
    private total = 0;
    private taxRateFactor = 0.2;

    addDonation(amount: number) {
      if (amount <= 0) {
        throw new Error("Donation exception");
      }
      const taxRebate = amount * this.taxRateFactor;
      const totalDonation = amount + taxRebate;
      this.total += totalDonation;
    }

    getAmountRaised() {
      return this.total;
    }
  }


  const totalizer = new Totalizer();
  totalizer.addDonation(100.0);

  const fundsRaised = totalizer.getAmountRaised();

  // 120
  console.log(fundsRaised);
}
