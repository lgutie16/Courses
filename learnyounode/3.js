//Sync

const fs = require('fs')
//const file = fs.readFileSync(process.argv[2])
//official solution
const file = fs.readFileSync(process.argv[2], 'utf8')
const numberOfLines = file.split('\n').length - 1

/* const stringFormatted = file.toString() //avoid this
const numberOfLines = stringFormatted.split('\n').length - 1*/



console.log(numberOfLines)