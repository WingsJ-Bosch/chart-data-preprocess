import { describe, expect, it } from 'vitest';
import { ratio } from '../src';

describe('ratio', () => {
  it('$', () => {
    let list = [
      { name: '1', x: 1 },
      { name: '2', x: 2 },
      { name: '3', x: 3 }
    ];

    let r = ratio(list);

    expect(r.map(a => a.x)).toEqual([1 / 6, 2 / 6, 3 / 6]);
  });
});
