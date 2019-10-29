//Asycn

/* const fs = require('fs')
let numberOfLines

function countLines(callback) {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, data) {
        numberOfLines = data.split('\n').length - 1
        callback()
    })
}

function logNumber() {
    console.log(numberOfLines)
}

countLines(logNumber) */


//Official Solution
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, 'utf8', function (err, result) {
    if (err) console.log(err)
    const lines = result.split('\n').length - 1
    console.log(lines)
})