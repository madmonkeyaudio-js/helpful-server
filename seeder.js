const db = require('./Models');

let colorOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let myColor = []
let allColors = [];
let numOfColors = 128;

//TRY TO FIND MORE EFFICIENT METHOD, LESS BRUTE FORCE

function findRandom(count) {

    for(let i = 0; i < count; i++){
        let randomDigit = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        myColor.push(randomDigit)
    }
    return myColor;
}

function populateColors(count) {
    findRandom(6 * numOfColors);
    for(let i = 0; i < count; i++){
        if(myColor.length){
            let color = myColor.splice(0, 6);
            db.Color.create({
                hexId: color.join("")
            })
        }
    }

    return allColors
}

console.log(populateColors(numOfColors))