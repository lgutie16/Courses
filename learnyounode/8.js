const http = require('http')
const bl = require('bl')
// To test == https://my-json-server.typicode.com/typicode/demo


//response is a node stream -> object that emits events
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (error, data) {
        if (error) return console.error(error)
        const formattedData = data.toString()
        console.log(formattedData.length)
        console.log(formattedData)
    }))

}).on('error', console.error)