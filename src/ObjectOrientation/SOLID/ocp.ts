/* 
Software entities should be open for extension but closed for modification.
- make it possible to substitute one class with another to get different behavior

*/

namespace OpenClosedPrinciple {
  class RewardPointsCalculator {
    getPoints(transactionValue: number) {
      // 4 points per whole dollar spent
      return Math.floor(transactionValue) * 4;
    }
  }

  class DoublePointsCalculator extends RewardPointsCalculator {
    getPoints(transactionValue: number) {
      const standardPoints = super.getPoints(transactionValue);
      return standardPoints * 2;
    }
  }

  const pointsCalculator = new DoublePointsCalculator();

  // 800
  console.log(pointsCalculator.getPoints(100.99));
}
