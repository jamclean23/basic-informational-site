
// ====== IMPORTS ======

// Server
const { readFileSync, read, readFile } = require('fs');
const http = require('http');

// Pages

// Index
const index = readFileSync('./pages/index/index.html', 'utf-8');
const indexJs = readFileSync('./pages/index/index.js', 'utf-8');
const indexCss = readFileSync('./pages/index/index.css', 'utf-8');

// About
const about = readFileSync('./pages/about/about.html', 'utf-8');
const aboutJs = readFileSync('./pages/about/about.js', 'utf-8');
const aboutCss = readFileSync('./pages/about/about.css', 'utf-8');

// Contact
const contact = readFileSync('./pages/contact/contact.html', 'utf-8');
const contactJs = readFileSync('./pages/contact/contact.js', 'utf-8');
const contactCss = readFileSync('./pages/contact/contact.css', 'utf-8');

// 404
const fourOhFour = readFileSync('./pages/404/404.html', 'utf-8');
const fourOhFourJs = readFileSync('./pages/404/404.js', 'utf-8');
const fourOhFourCss = readFileSync('./pages/404/404.css', 'utf-8');

// ====== SERVER ======

console.log('Server listening on 8080');

http.createServer((req, res) => {
    console.log(req.url);
    switch(req.url) {


        // INDEX

        // Index page
        case '/index':
            res.write(index);
            break;

        // Index javascript
        case '/index/index.js':
            res.write(indexJs);
            break;

        // Index css
        case '/index/index.css':
            res.write(indexCss);
            break;


        // ABOUT

        // About page
        case '/about':
            res.write(about);
            break;

        // About javascript
        case '/about/about.js':
            res.write(aboutJs);
            break;

        // About css
        case '/about/about.css':
            res.write(aboutCss);
            break;


        // CONTACT

        // Contact page
        case '/contact':
            res.write(contact);
            break;

        // Contact javascript
        case '/contact/contact.js':
            res.write(contactJs);
            break;

        // Contact css
        case '/contact/contact.css':
            res.write(contactCss);
            break;
        

        // 404

        // 404 javascript
        case '/404/404.js':
            res.write(fourOhFourJs);
            break;

        // 404 css
        case '/404/404.css':
            res.write(fourOhFourCss)
            break;
            
        // 404 page
        default:
            res.write(fourOhFour);
            break;
    }
    
    res.end();

}).listen(8080);

