const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer( (req, res) => {
    let url = req.url.slice(1);
    
    while (url[url.length - 1] == '/') {
        url = url.slice(0, url.length-1);
    }

    res.setHeader('Content-Type', 'text/html');

    if (url === 'about') {
        console.log(url);

        fs.readFile('about.html', 'utf-8', (err, data) => {
            res.end(data);
        })
    }

    else if (url === 'contact') {
        fs.readFile('contact.html', 'utf-8', (err, data) => {
            res.end(data);
        })
    }

    else if (url === '') {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            res.end(data);
        })
    }

    else {
        fs.readFile('404.html', 'utf-8', (err, data) => {
            res.end(data);
        })
    }

    // res.end('<h1> hello world </h1>');
});

server.listen(port, () => {
    console.log(`Started at port ${port}`);
});
