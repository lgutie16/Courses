const net = require('net')

const port = process.argv[2]

const server = net.createServer(function listener(socket) {
    const date = new Date()
    const year = date.getFullYear()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)  // starts at 0  
    const day = ('0' + (date.getDate())).slice(-2)      // returns the day of month  
    const hour = ('0' + (date.getHours())).slice(-2)
    const minutes = ('0' + (date.getMinutes())).slice(-2)

    const formattedDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n'

    //socket handling
    socket.end(formattedDate)
})

server.listen(port)