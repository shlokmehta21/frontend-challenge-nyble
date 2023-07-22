const roundToNearest5 = (num: number) => {
  return Math.round(num / 5) * 5;
};

/* From max allowed balance, get early payroll advance options*/
const getAdvanceAmountOptionsList = (maxAllowedBalance: number) => {
  if (maxAllowedBalance <= 10) {
    return [8, 9, 10];
  }
  if (maxAllowedBalance <= 30) {
    return [maxAllowedBalance - 10, maxAllowedBalance - 5, maxAllowedBalance];
  }
  return [
    roundToNearest5(maxAllowedBalance / 3),
    roundToNearest5((2 * maxAllowedBalance) / 3),
    maxAllowedBalance,
  ];
};

export default getAdvanceAmountOptionsList;
