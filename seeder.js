const db = require('./Models');

let colorOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
let myColor = []
let allColors = [];


function findRandom(count) {

    for(let i = 0; i < count; i++){
        let randomDigit = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        myColor.push(randomDigit)
    }
    return myColor;
}

function populateColors(count) {
    findRandom(6*128);
    for(let i = 0; i < count; i++){
        if(myColor.length){
            let color = myColor.splice(0, 6)
            allColors.push({
                index: i,
                hedId: color
            })
        }
    }

    return allColors
}

console.log(populateColors(128))