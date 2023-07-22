const getExpressFeeFromMaxBalance = (maxBalance: number) => {
  if (maxBalance >= 11000) {
    return 799;
  } else if (maxBalance >= 9000) {
    return 699;
  } else if (maxBalance >= 5000) {
    return 599;
  } else if (maxBalance >= 3000) {
    return 499;
  }
  return 399;
};

export default getExpressFeeFromMaxBalance;
