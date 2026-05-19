import type { Vector2, Vector2Array } from '../../types/vector-array';

/**
 * Cursor Compress
 * @type [T] Origin Type
 * @param [array] Array
 * @return Unique Array
 */
function cursorCompress<T = any>(array: T[], identifiers?: ((item: T) => any)[]): T[] {
  if (array.length > 2) {
    let temp = [array[0]!];
    let last = temp[0]!;
    for (let i = 1; i < array.length - 1; i++) {
      let current = array[i]!;

      if (identifiers?.length) {
        let unique = false;
        for (let a of identifiers) {
          if (a(current) !== a(last)) {
            unique = true;

            break;
          }
        }
        if (unique) {
          temp.push(current);
          last = current;
        }
      } else {
        if (current !== last) {
          temp.push(current);
          last = current;
        }
      }
    }
    temp.push(array.at(-1)!);

    return temp;
  } else {
    return Array.from(array);
  }
}
/**
 * Largest Triangle Three Buckets
 * @type [T] Origin Type
 * @param [array] Origin Array
 * @param [length] Target Length
 * @return Downsampled Array
 */
function largestTriangleThreeBuckets<T extends Vector2 = any>(array: Vector2Array<T>, length: number): T[] {
  if (array.length <= length || array.length <= 3) {
    return Array.from(array);
  } else {
    let temp = [array.at(0)!]; // Include first point.
    let batch = (array.length - 2) / (length - 2); // Bucket size.

    let currentPoint = array.at(0)!; // Starting reference point.
    let maxArea = -1; // Current max triangle area.
    let maxAreaPoint = currentPoint; // Candidate with max area.

    for (let i = 0; i < length - 2; i++) {
      maxArea = -1; // Reset max area for this bucket.
      maxAreaPoint = currentPoint; // Default to current point.

      let nextBucketAverage = { x: 0, y: 0 }; // Accumulator for next bucket average.
      let nextBucketRange: [number, number] = [Math.floor((i + 1) * batch) + 1, Math.floor((i + 2) * batch) + 1]; // Next bucket indices.
      nextBucketRange[1] = nextBucketRange[1] < array.length ? nextBucketRange[1] : array.length; // Clamp end.
      let nextBucketLength = nextBucketRange[1] - nextBucketRange[0]; // Next bucket length.

      if (nextBucketLength > 0) {
        for (let j = nextBucketRange[0]; j < nextBucketRange[1]; j++) {
          nextBucketAverage.x += array[j]!.x;
          nextBucketAverage.y += array[j]!.y;
        }
        nextBucketAverage.x /= nextBucketLength; // Compute average x.
        nextBucketAverage.y /= nextBucketLength; // Compute average y.
      } else {
        let fallback = array[nextBucketRange[0]] ?? array[array.length - 1] ?? currentPoint; // Fallback to the next available point or current point.
        nextBucketAverage.x = fallback.x;
        nextBucketAverage.y = fallback.y;
      }

      let currentBucketRange: [number, number] = [Math.floor(i * batch) + 1, Math.floor((i + 1) * batch) + 1]; // Current bucket indices.
      for (let j = currentBucketRange[0]; j < currentBucketRange[1]; j++) {
        let candidate = array[j]!; // Candidate point.
        let area =
          Math.abs((currentPoint.x - nextBucketAverage.x) * (candidate.y - currentPoint.y) - (currentPoint.x - candidate.x) * (nextBucketAverage.y - currentPoint.y)) * 0.5; // Triangle area.
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = candidate;
        }
      }

      temp.push(maxAreaPoint); // Select point for this bucket.
      currentPoint = maxAreaPoint; // Advance reference point.
    }

    temp.push(array.at(-1)!);

    return temp;
  }
}

export { cursorCompress, largestTriangleThreeBuckets };
