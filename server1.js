//READING HTML
/*const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf8', function(error, data) {  // Use regular function syntax here
        if (error) {
            res.statusCode = 500;  // Set the correct HTTP status code for errors
            res.end('Error reading file');
        } else {
            res.statusCode = 200;  // Set the HTTP status code to 200 (OK)
            res.end(data);  // Return the data (index.html content)
        }
    });
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
});*/

//Creating a Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');  

// Create a server
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    if (pathname === '/') {
        pathname = '/index.html'; 
    }

    console.log("Request for " + pathname + " received.");

    var filePath = path.join(__dirname, pathname);

    fs.readFile(filePath, function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write('<html><body><h1>404 - File Not Found</h1></body></html>');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});

            response.write(data.toString());
        }

        response.end();
    });
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
