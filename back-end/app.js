const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

const puppies = require('./api/puppies'); 

app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/puppies', puppies)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

//You would put yuor error handling middleware at the end!
// Check out the docs.
// https://expressjs.com/en/guide/error-handling.html

// const coreysLoggingMiddleware = () => {
//     return function(req, res, next){
//         console.log(req.method, req.path);
//         next();
//     }
// }
// app.use(coreysLoggingMiddleware())


//param called id is accessible req.params.id

// /products
// /products?prime=true
app.listen(3000);

// const http = require('http');
// const server = http.createServer();

// server.on('request', (req, res) => {
//     res.writeHead(200);
//     res.write('<h1>This is soooo cool!</h1>');
//     res.end();
// })

// server.listen(3000)