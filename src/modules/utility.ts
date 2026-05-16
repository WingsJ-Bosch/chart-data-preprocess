/**
 * Fix
 * @param [value] Value
 * @return Number
 */
function fix(value: any): number {
  if (value == null || value === undefined || value === '') {
    return 0;
  } else if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number.parseFloat(value);
  } else {
    return NaN;
  }
}

export { fix };
