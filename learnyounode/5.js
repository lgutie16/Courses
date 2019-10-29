const fs = require('fs')
const path = require('path')

const extension = process.argv[3]
fs.readdir(process.argv[2], function filterFiles(err, list) {
    list.map(item => {
        if (path.extname(item) === `${'.' + extension}`) console.log(path.basename(item))
    })
})