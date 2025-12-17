/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = '';
  let counter = 1;
  for (let i = 0; i < height; i++) {
    const spaces = ' '.repeat(height - i - 1);
    let row = '';
    for (let j = 0; j < 2 * i + 1; j++) {
        if (counter % frequency === 0) {
            row += ornament;
        } else {
            row += '*';
        }
        counter++;
    }
    result += spaces + row + '\n';
  }
  
  result += ' '.repeat(height - 1) + '#';
  console.log(result);
  
  return result;
}


drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #