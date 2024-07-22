// Create web server
// 1. Create a web server that listens on port 3000
// 2. Respond to the following urls with the following strings:
//    - /cats => "Meow!"
//    - /dogs => "Woof!"
//    - /cats_and_dogs => "Living together"
// 3. Respond to all other urls with a 404 status code and the following string:
//    "404 Not Found"
// 4. Make sure to set the Content-Type header to text/plain for all
//    responses.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/cats') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Meow!');
  } else if (req.url === '/dogs') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Woof!');
  } else if (req.url === '/cats_and_dogs') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Living together');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(3000);