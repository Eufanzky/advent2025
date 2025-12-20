/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
  const rows = factory.length;
  const cols = factory[0].length;
  
  const directions = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0]
  };
  
  const visited = new Set();
  let row = 0;
  let col = 0;
  
  while (true) {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return 'broken';
    }

    const cell = factory[row][col];
    if (cell === '.') {
      return 'completed';
    }
    
    const posKey = `${row},${col}`;
    if (visited.has(posKey)) {
      return 'loop';
    }
    visited.add(posKey);
    
    const [rowDelta, colDelta] = directions[cell];
    row += rowDelta;
    col += colDelta;
  }
}

console.log(runFactory([
  '>>.'
])); // 'completed'

console.log(runFactory([
  '>>>'
])); // 'broken'

console.log(runFactory([
  '>><'
])); // 'loop'

console.log(runFactory([
  '>>v',
  '..<'
])); // 'completed'

console.log(runFactory([
  '>>v',
  '<<<'
])); // 'broken'

console.log(runFactory([
  '>v.',
  '^..'
])); // 'completed'

console.log(runFactory([
  'v.',
  '^.'
])); // 'loop'