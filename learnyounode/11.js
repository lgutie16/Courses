const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const fileRoute = process.argv[3]

const server = http.createServer(function (request, response) {
    const readStream = fs.createReadStream(fileRoute)

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(response);
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function (err) {
        response.end(err);
    });
})

server.listen(port)