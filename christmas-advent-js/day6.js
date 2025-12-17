/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  const available = new Map(); // For tracking unpaired gloves
  const result = [];
  
  for (const glove of gloves) {
    const opposite = glove.hand === 'L' ? 'R' : 'L';
    const key = `${opposite}-${glove.color}`;
    
    // Check if there's a matching glove waiting
    if (available.has(key) && available.get(key) > 0) {
      result.push(glove.color);
      available.set(key, available.get(key) - 1);
    } else {
      const currentKey = `${glove.hand}-${glove.color}`;
      available.set(currentKey, (available.get(currentKey) || 0) + 1);
    }
  }
  
  return result;
}

const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

matchGloves(gloves4)
// ['red', 'green']