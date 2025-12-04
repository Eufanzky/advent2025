/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    if (size < 2) return '';
    let box = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            (i === 0 || j === 0 || i === size - 1 || j === size - 1)? box += symbol: box+=" ";
        }
        if (i !== size-1) box += '\n';
    }
    return box
}

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  poor intern…