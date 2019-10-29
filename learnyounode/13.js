const http = require('http')
const url = require('url')

const PORT = process.argv[2]
const server = http.createServer(function (request, response) {
    const requestData = url.parse(request.url, true)

    if (request.method === 'GET') {
        let formattedDate
        if (requestData.pathname === '/api/parsetime') {
            const date = new Date(requestData.query.iso)
            formattedDate = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        }

        if (requestData.pathname === '/api/unixtime') {
            const date = new Date(requestData.query.iso).getTime()
            formattedDate = {
                unixtime: date
            }
        }

        if (formattedDate) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(formattedDate));
        } else {
            response.writeHead(404)
            response.end()
        }

    }
})

server.listen(PORT)