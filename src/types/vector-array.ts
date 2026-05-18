/**
 * Vector 1
 */
interface Vector1 {
  x: number;
}
/**
 * Vector 2
 */
interface Vector2 {
  x: number;
  y: number;
}

type Vector1Array<T extends Vector1 = any> = T[];
type Vector2Array<T extends Vector2 = any> = T[];

export type { Vector1, Vector1Array, Vector2, Vector2Array };
