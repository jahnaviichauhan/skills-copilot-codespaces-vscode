// Create web server that can accept any request to localhost:3000 and respond with
// the same text as the request
// Use the 'data' and 'end' events to stream data from request to response

// http is a core module
var http = require("http");
var fs = require("fs");

// Create server
var server = http.createServer(function(req, res) {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  // This callback runs when a new stream is created (when a request is made)
  // req is a stream that contains info about the request
  // res is a stream that contains info about the response

  if (req.method === "GET" && req.url === "/comments.json") {
    // set response header
    res.writeHead(200, {"Content-Type": "text/plain"});
    // read the file comments.json
    fs.createReadStream("./comments.json").pipe(res);
  } else if (req.method === "POST" && req.url === "/comments.json") {
    // set response header
    res.writeHead(200, {"Content-Type": "text/plain"});
    // read the file comments.json
    fs.createReadStream("./comments.json").pipe(res);
  } else {
    // set response header
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Not Found");
  }
});

// Listen for connections
server.listen(3000);

console.log("Server running on port 3000");