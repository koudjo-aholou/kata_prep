// Sum digit event number position 3 + 8 + 7 = 18
// 18 * 3 = 54
// Add digit odd Number 54 + (9+4) = 67
// Last Digit 7
// SUbstract 7 fro 10 = 3
function computeCheckDigit(identificationNumber) {
  const arr = identificationNumber.split('').map((strNum) => Number(strNum));

  const evenIndexesNumber = arr.filter((_el, index) => (index + 1) % 2 === 1);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sumEvenNumberTime3 = evenIndexesNumber.reduce(reducer) * 3;
  const oddIndexesNumber = arr.filter((_el, index) => (index + 1) % 2 === 0);
  const sumTotal = oddIndexesNumber.reduce(reducer) + sumEvenNumberTime3;
  const lastNumber = Number(String(sumTotal).at(-1));
  if (lastNumber === 0) return 0;
  return 10 - lastNumber;
}

export { computeCheckDigit };
