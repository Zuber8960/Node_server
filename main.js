
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log('zuber');
    // res.write('<H1>Zuber Ahmad</H1>');
    // res.end();
    // console.log(req.url,req.headers,req.method);
    const url = req.url;
   
    if (url === '/home') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>Welcome Home</body>');
        res.write('</html>');
        return res.end()
    }else if(url==='/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body>About Us</body>');
        res.write('</html>');
        return res.end()
    }else if(url==='/node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body>Welcome to my Node JS projects</body>');
        res.write('</html>');
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>Welcome to my Node JS projects.</body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);





