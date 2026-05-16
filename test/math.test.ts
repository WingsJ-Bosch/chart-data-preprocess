import { describe, expect, it } from 'vitest';
import { mean, min, sum } from '../src/modules/math';

describe('min', () => {
  it(() => {
    let r = min([1, 2, 3, 4, 5]);

    expect(r).toBe(1);
  });
});
describe('max', () => {
  it(() => {
    let r = min([1, 2, 3, 4, 5]);

    expect(r).toBe(5);
  });
});
describe('minMax', () => {
  it(() => {
    let r = min([1, 2, 3, 4, 5]);

    expect(r).toEqual([1, 5]);
  });
});
describe('sum', () => {
  it(() => {
    let r = sum([1, 2, 3, 4, 5]);

    expect(r).toBe(15);
  });
});
describe('mean', () => {
  it(() => {
    let r = mean([1, 2, 3, 4, 5]);

    expect(r).toBe(3);
  });
});
