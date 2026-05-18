/**
 * Parse
 * @param [value] Value
 * @return Number
 */
function parse(value: any): number {
  if (value == null || value === undefined || value === '') {
    return 0;
  } else if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    if (value.endsWith('%')) {
      return Number.parseFloat(value) / 100;
    } else {
      return Number.parseFloat(value);
    }
  } else {
    return NaN;
  }
}

export { parse };
