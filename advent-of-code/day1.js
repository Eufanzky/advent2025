const fs = require('fs');

const lines = fs.readFileSync('input_day_1.txt', 'utf8')
  .split('\n')
  .map(line => line.trim());


const parseInstructor = (line) => {
    const letter = line.charAt(0);
    const number = parseInt(line.slice(1));
    return { letter, number };
}

let constructPassword = (fileInLines) => {
    let password = 0;
    let startPoint = 50;
    // looping through each line
    for (const line of fileInLines) {
        let {letter, number} = parseInstructor(line);
        console.log(letter, number);
        
        if (letter === '') break;
        if (letter === 'L') {
            startPoint -= number;
            while (startPoint < 0) startPoint = 100 + startPoint;
        } else if (letter === 'R') {
            startPoint += number;
            while (startPoint > 99) startPoint = startPoint - 100;
            if (startPoint === 100) startPoint = 0;
        }
        console.log("start point: ", startPoint);

        if (startPoint === 0) password += 1;
    }
    return password;
}
//let result = constructPassword(lines);
//console.log(result);



let constructPassword2 = (fileInLines) => {
    let password = 0;
    let startPoint = 50;
    // looping through each line
    for (const line of fileInLines) {
        let {letter, number} = parseInstructor(line);
        if (letter === '') break;
        console.log(letter, number);
        
        if (letter === 'L') {
            startPoint -= number;
            let temporalCounter = 0; 
            while (startPoint < 0) {
                startPoint = 100 + startPoint;
                temporalCounter += 1;
            }
            if (temporalCounter !== 0) password = password + temporalCounter - 1;
        } else if (letter === 'R') {
            startPoint += number;
            let temporalCounter = 0; 
            while (startPoint > 99) {
                startPoint = startPoint - 100;
                temporalCounter += 1;
            }
            if (temporalCounter !== 0 )password = password + temporalCounter - 1;
            if (startPoint === 100) startPoint = 0;
        }
        console.log("start point: ", startPoint);
        console.log("password: ", password);

        if (startPoint === 0) password += 1;
    }
    return password;
}
let result2 = constructPassword2(lines);
console.log(result2);