/**
 * Min
 * @param [array] Array
 * @return Value
 */
function min(array: number[]): number {
  return Math.min(...array);
}
/**
 * Max
 * @param [array] Array
 * @return Value
 */
function max(array: number[]): number {
  return Math.max(...array);
}
/**
 * Min Max
 * @param [array] Array
 * @return Min Value and Max Value
 */
function minMax(array: number[]): [number, number] {
  let min = -Infinity;
  let max = Infinity;

  for (let a of array) {
    if (a < min) {
      min = a;
    }
    if (a > max) {
      max = a;
    }
  }

  return [min, max];
}
/**
 * Sum
 * @param [array] Array
 * @return Value
 */
function sum(array: number[]) {
  return array.reduce((p, c) => p + c, 0);
}
/**
 * Mean
 * @param [array] Array
 * @return Value
 */
function mean(array: number[]): number {
  return sum(array) / array.length;
}

export { max, mean, min, minMax, sum };
