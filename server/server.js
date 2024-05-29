/*const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');

let port = 3000;

app.use(express.static(path.join(__dirname, '../client/static')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

server.listen(port, () =>
    console.log('Starting server on port '+port)
);*/


// This is a simple static server used for development purposes only
var StaticServer = require('static-server');
var server = new StaticServer({ rootPath: './public', port: 5001 });
server.start(() => console.log(`Server listening to ${server.port}`));
