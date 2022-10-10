// same as index.js but with express

const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    fs.readFile('index.html', 'utf-8', (err, data) => {
        res.end(data);
    });
});

app.get('/about', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    fs.readFile('about.html', 'utf-8', (err, data) => {
        res.end(data);
    });
});

app.get('/contact', (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    
    fs.readFile('contact.html', 'utf-8', (err, data) => {
        res.end(data);
    });
});

app.use( (req, res, next) => {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });

    fs.readFile('404.html', 'utf-8', (err, data) => {
        res.end(data);
    });
});

app.listen(port);