/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  const warehouseArray = warehouse.map(row => row.split(''));
  let count = 0;
  for (let i = 0; i < warehouseArray.length; i++) {
    for (let j = 0; j < warehouseArray[i].length; j++) {
      if (warehouseArray[i][j] === '*') {
        // Check adjacent cells
        if (i > 0 && warehouseArray[i - 1][j] === '#') continue;
        if (i < warehouseArray.length - 1 && warehouseArray[i + 1][j] === '#') continue;
        if (j > 0 && warehouseArray[i][j - 1] === '#') continue;
        if (j < warehouseArray[i].length - 1 && warehouseArray[i][j + 1] === '#') continue;
        // If no adjacent '#', increment count
        count++;
      }
    }
  }
  return count;
}

findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

// All presents are next to a camera

findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

// This present has no cameras around

findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2
// The presents in the top corners have no cameras around

findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

// The four presents have no cameras, because they are diagonal to the camera