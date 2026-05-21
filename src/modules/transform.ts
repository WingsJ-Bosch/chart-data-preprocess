import type { Vector1 } from '../types/vector-array';
import { sum } from './math';

/**
 * Ratio
 * @type [T] Origin Type
 * @param [array] Array
 * @return Array with X Ratio
 */
function ratio<T extends Vector1 = any>(array: T[]): T[] {
  let total = sum(array.map(a => a.x));

  return array.map(a => ({ ...a, x: a.x / total }));
}

export { ratio };
