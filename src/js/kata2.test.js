import { factorial } from './kata2';

describe('KATA2 ', () => {
  it('5', () => {
    const init = factorial(5);
    expect(init).toEqual(120);
  });

  it('1', () => {
    const init = factorial(1);
    expect(init).toEqual(1);
  });

  it('0', () => {
    const init = factorial(0);
    expect(init).toEqual(1);
  });

  it('4', () => {
    const init = factorial(4);
    expect(init).toEqual(24);
  });
});
