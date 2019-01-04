const express = require('express');
const app = express();
const puppies = require('./puppies');
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join()); // bad practice because file system is different on OS
});

app.get('/puppies', (req, res) => {
  // res.send('<h1>Hello Darkness</h1>')
  res.send(puppies);
});

// param called id is accessible req.params.id
app.get('/puppies/:id', (req, res) => {
  //:id allows what comes after id to be variable
  const puppyId = Number(req.params.id)-1;
  res.send(puppies[puppyId]);
});

app.post();

app.listen(3000);
// raw HTTP requests
// const http = require('http');
// const server = http.createServer();
//
// server.on('request', (req, res) => {
//   res.writeHead(200);
//   res.write('<h1>Hello World</h1>');
//   res.end();
// }); // this can get nasty with multiple pages
//
// server.listen(3000);  // port number
