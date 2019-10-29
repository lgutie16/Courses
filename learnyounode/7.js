const http = require('http')
// To test == https://my-json-server.typicode.com/typicode/demo


//response is a node stream -> object that emits events
http.get(process.argv[2], function (response) {
    //Dummie option
    /*  // data, error, end
     response.on('data', function (data) {
         // console.log(data.toString())
     }) */

    //Pro option
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)