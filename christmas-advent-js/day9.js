/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    // transform the board to a matrix
    const matrix = board.trim().split('\n').map(row => row.split(''));
    let robotRow, robotCol;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '@') {
                robotRow = i;
                robotCol = j;
                break;
            }
        }
    }
    let currentElement = '';
    for (const move of moves) {
        if (move === 'U') {
            if (robotRow - 1 < 0) return 'crash';
            currentElement = matrix[robotRow - 1][robotCol];
            robotRow--;
        } else if (move === 'D') {
            if (robotRow + 1 >= matrix.length) return 'crash';
            currentElement = matrix[robotRow + 1][robotCol];
            robotRow++;
        } else if (move === 'L') {
            if (robotCol - 1 < 0) return 'crash';
            currentElement = matrix[robotRow][robotCol - 1];
            robotCol--;
        } else if (move === 'R') {
            if (robotCol + 1 >= matrix[0].length) return 'crash';
            currentElement = matrix[robotRow][robotCol + 1];
            robotCol++;
        }

        
        if (currentElement === '#') {
            return 'crash';
        }
        if (currentElement === '*') {
            return 'success';
        }

    }
    return 'fail';
}

const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'))
// ➞ 'fail' -> it moves but doesn't pick anything up

console.log(moveReno(board, 'U'))
// ➞ 'success' -> it picks something up (*) right above

console.log(moveReno(board, 'RU'))
// ➞ 'crash' -> it crashes into an obstacle (#)

console.log(moveReno(board, 'RRRUU'))
// ➞ 'success' -> it picks something up (*)

console.log(moveReno(board, 'DD'))
// ➞ 'crash' -> it crashes into the bottom of the board

console.log(moveReno(board, 'UUU'))
// ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

console.log(moveReno(board, 'RR'))
// ➞ 'fail' -> it moves but doesn't pick anything up