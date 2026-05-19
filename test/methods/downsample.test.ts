import { describe, expect, it } from 'vitest';
import { cursorCompress, largestTriangleThreeBuckets } from '../../src';

describe('cursorCompress', () => {
  it('$', () => {
    let r = cursorCompress(
      [
        { x: 1, y: 1, value: 'a' },
        { x: 2, y: 1, value: 'b' },
        { x: 3, y: 1, value: 'c' },
        { x: 4, y: 2, value: 'd' },
        { x: 5, y: 2, value: 'e' },
        { x: 6, y: 2, value: 'f' }
      ],
      [a => a.y]
    );

    expect(r).toEqual([
      { x: 1, y: 1, value: 'a' },
      { x: 4, y: 2, value: 'd' },
      { x: 6, y: 2, value: 'f' }
    ]);
  });
});

describe('largestTriangleThreeBuckets', () => {
  it('$', () => {
    let r = largestTriangleThreeBuckets(
      [
        { x: 1, y: 2, value: 'a' },
        { x: 2, y: 2, value: 'b' },
        { x: 3, y: 3, value: 'c' },
        { x: 4, y: 3, value: 'd' },
        { x: 5, y: 6, value: 'e' },
        { x: 6, y: 3, value: 'f' },
        { x: 7, y: 3, value: 'g' },
        { x: 8, y: 5, value: 'h' },
        { x: 9, y: 4, value: 'i' },
        { x: 10, y: 4, value: 'j' },
        { x: 11, y: 1, value: 'k' },
        { x: 12, y: 2, value: 'l' }
      ],
      3
    );

    expect(r).toEqual([
      { x: 1, y: 2, value: 'a' },
      { x: 5, y: 6, value: 'e' },
      { x: 12, y: 2, value: 'l' }
    ]);
  });
});
