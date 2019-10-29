const http = require('http')
const map = require('through2-map')
const fs = require('fs')

const PORT = process.argv[2]

const server = http.createServer(function (request, response) {
    if (request.method === 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
})

server.listen(PORT)