import { describe, expect, it } from 'vitest';
import { downsample } from '../../src';

describe('downsample', () => {
  it('$', () => {
    let r = downsample(
      [
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: 6 },
        { x: 6, y: 3 },
        { x: 7, y: 3 },
        { x: 8, y: 5 },
        { x: 9, y: 4 },
        { x: 10, y: 4 },
        { x: 11, y: 1 },
        { x: 12, y: 2 }
      ],
      3
    );

    expect(r).toEqual([
      { x: 1, y: 2 },
      { x: 5, y: 6 },
      { x: 12, y: 2 }
    ]);
  });
});
