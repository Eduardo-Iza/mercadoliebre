const path = require('path');
const express = require('express');
const server = express();

server.use ("/static", express.static("public"));
server.listen(3000, () => {
     console.log('Servidor iniciado en el puerto 3000')
    });
server.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/home.html'));
});
server.get('/login', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/login.html'));
});
server.get('/register', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/register.html'));
});