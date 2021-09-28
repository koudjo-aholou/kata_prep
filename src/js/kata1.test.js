import { computeCheckDigit } from './kata1';

// Sum digit event number position 3 + 8 + 7 = 18
// 18 * 3 = 54
// Add digit odd Number 54 + (9+4) = 67
// Last Digit 7
// SUbstract 7 fro 10 = 3

describe('KATA1 ', () => {
  it('39847', () => {
    const init = computeCheckDigit('39847');
    expect(init).toEqual(3);
  });

  it('34', () => {
    const init = computeCheckDigit('34');
    expect(init).toEqual(7);
  });

  it('343428', () => {
    const init = computeCheckDigit('343428');
    expect(init).toEqual(0);
  });
});
