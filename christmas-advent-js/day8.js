/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {

  const frequency = new Map();
  
  for (const char of toy) {
    const lowerChar = char.toLowerCase();
    frequency.set(lowerChar, (frequency.get(lowerChar) || 0) + 1);
  }
  
  for (const char of toy) {
    const lowerChar = char.toLowerCase();
    if (frequency.get(lowerChar) === 1) {
      return char;
    }
  }
  
  return '';
}

findUniqueToy('Gift') // 'G'
// ℹ️ The G is the first letter that is not repeated
// and we return it exactly as it appears

findUniqueToy('sS') // ''
// ℹ️ The letters are repeated, since it doesn't distinguish uppercase

findUniqueToy('reindeeR') // 'i'
// ℹ️ The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'