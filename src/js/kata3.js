/**
 *
 * @param {*} value
 * @param {Boolean} equalType
 * @param {*} value2
 * @returns {Boolean}
 */
function falsyValueStrictEq(value, value2) {
  return value === value2;
}

function falsyValueEq(value, value2) {
  // eslint-disable-next-line eqeqeq
  return value == value2;
}
export { falsyValueStrictEq, falsyValueEq };
