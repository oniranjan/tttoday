var http = require("http");
http.createServer(function(resquest, response) {
    response.write("HELLO NIRANJAN");
    response.end();
}).listen(7070);
console.log("server running at 7070");