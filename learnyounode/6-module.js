const fs = require('fs')
const path = require('path')

module.exports = function filterData(directory, extension, callbackfunc) {
    fs.readdir(directory, function (err, data) {
        if (err) return callbackfunc(err)
        const filteredData = data.filter(item => path.extname(item) === '.' + extension)
        callbackfunc(null, filteredData)
    })
}