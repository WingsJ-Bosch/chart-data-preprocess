import type { Vector1, Vector1Array } from '../types/vector-array';
import { sum } from './math';

/**
 * Ratio
 * @type [T] Origin Type
 * @param [array] Array
 * @return Array with X Ratio
 */
function ratio<T extends Vector1 = any>(array: Vector1Array<T>) {
  let total = sum(array.map(a => a.x));

  return array.map(a => ({ x: a.x / total }));
}

export { ratio };
