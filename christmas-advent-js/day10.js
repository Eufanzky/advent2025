/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
    let currentDepth = 0;
    let maxDepth = 0;

    for (const char of s) {
        if (char === '[') {
            currentDepth++;
            maxDepth = Math.max(maxDepth, currentDepth);
        } else if (char === ']') {
            currentDepth--;
            if (currentDepth < 0) {
                return -1;
            }
        }
    }
    
    if (currentDepth !== 0) {
        return -1;
    }

    return maxDepth;
}

console.log(maxDepth('[]')); // -> 1
console.log(maxDepth('[[]]')); // -> 2
console.log(maxDepth('[][]')); // -> 1
console.log(maxDepth('[[][]]')); // -> 2
console.log(maxDepth('[[[]]]')); // -> 3
console.log(maxDepth('[][[]][]')); // -> 2

console.log(maxDepth('][')); // -> -1 (closes before opening)
console.log(maxDepth('[[[')); // -> -1 (missing closing brackets)
console.log(maxDepth('[]]]')); // -> -1 (extra closing brackets)
console.log(maxDepth('[][][')); // -> -1 (one remains unclosed)