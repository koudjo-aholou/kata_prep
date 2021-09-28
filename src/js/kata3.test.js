import { falsyValueStrictEq, falsyValueEq } from './kata3';

describe('KATA3 ', () => {
  it('[] == [] is not falsy value', () => {
    const isEqual = falsyValueEq([], []);
    expect(isEqual).toEqual(false);
  });

  it('0 == false is not falsy value', () => {
    const isEqual = falsyValueEq(0, false);
    expect(isEqual).toEqual(true);
  });

  it('1 == "1" is not falsy value', () => {
    const isEqual = falsyValueEq(1, '1');
    expect(isEqual).toEqual(true);
  });

  it('[] === [] is falsy value', () => {
    const strictEquality = falsyValueStrictEq([], []);
    expect(strictEquality).toEqual(false);
  });

  it('nul == undefined', () => {
    const init = falsyValueEq(null, undefined);
    expect(init).toEqual(true);
  });

  it('{x:1} == {x:1}', () => {
    const isEqual = falsyValueEq({ x: 1 }, { x: 1 });
    expect(isEqual).toEqual(false);
  });

  it('[1] == [1]', () => {
    const isEqual = falsyValueEq([1], [1]);
    expect(isEqual).toEqual(false);
  });

  it('nul === undefined', () => {
    const init = falsyValueStrictEq(null, undefined);
    expect(init).toEqual(false);
  });

  it('0 === false', () => {
    const isEqual = falsyValueStrictEq(0, false);
    expect(isEqual).toEqual(false);
  });

  it('1 === "1"', () => {
    const isEqual = falsyValueStrictEq(1, '1');
    expect(isEqual).toEqual(false);
  });

  it('{x:1} === {x:1}', () => {
    const isEqual = falsyValueStrictEq({ x: 1 }, { x: 1 });
    expect(isEqual).toEqual(false);
  });

  it('[1] === [1]', () => {
    const isEqual = falsyValueStrictEq([1], [1]);
    expect(isEqual).toEqual(false);
  });
});
