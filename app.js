const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200);
  res.write('<h1>Hello World</h1>');
  res.end();
});

server.listen(3000);  // port number
