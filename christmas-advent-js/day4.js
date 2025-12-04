/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    let digit = "";
    let newCounter = 0;
    let isMinusLess = false;
    for (const char of code) {
        if (char === '[') {
            newCounter = 0;
        } else if (char === '+') {
            newCounter++;
        } else if (char === '-') {
            newCounter--;
        } else if (char === ']') {
            if(isMinusLess === false) digit += newCounter.toString();
            if(isMinusLess === true) isMinusLess = false;
        } else if (char === '<') {
            digit += digit[digit.length - 1];
            isMinusLess = true;
        } else if (!isNaN(char)) {
            newCounter = parseInt(char);
        }

        if (newCounter === 10) newCounter = 0;
        if (newCounter === -1) newCounter = 9;
    }
    if (digit.length < 4) return null;
    return digit;
}

console.log(decodeSantaPin('[1++][2-][3+][<]'));
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'));
// "0944"

console.log(decodeSantaPin('[1+][2-]'));
// null (only 2 digits)