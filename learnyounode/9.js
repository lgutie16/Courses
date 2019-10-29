const http = require('http')
const bl = require('bl')
// To test == http://my-json-server.typicode.com/typicode/demo


//response is a node stream -> object that emits events
const urls = [process.argv[2], process.argv[3], process.argv[4]]
let counter = 0
let responses = []

urls.map((url, index) => {
    http.get(url, function (response) {
        response.pipe(bl(function (error, data) {
            if (error) return console.error(error)
            const formattedData = data.toString()
            responses[index] = formattedData
            counter++

            if (counter === 3) {
                responses.forEach(response => { console.log(response) })
            }
        }))
    })
})






