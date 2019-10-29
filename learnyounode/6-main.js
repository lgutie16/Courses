const filterData = require('./6-module')

const directory = process.argv[2]
const extension = process.argv[3]

const result = filterData(directory, extension, function (err, data) {
    if (err) console.log(err)
    data.forEach(element => {
        console.log(element)
    });
})