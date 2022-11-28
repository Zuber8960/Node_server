const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile("massage.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }

            res.write('<html>');
            res.write('<head><title>Enter Massage</title></head>');
            res.write(`<body><p>${data}</p><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        })
    } else if (url === '/massage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const massage = parsedBody.split('=')[1];
            // res.write(massage);
            fs.writeFile('massage.txt', massage, (err) => {
                // console.log(err);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>Welcome to my Node JS projects.</body>');
        res.write('</html>');
        res.end();
    }
}


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     text: 'some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.text = 'some ard coded text';

exports.handler=requestHandler;
exports.text = 'some text in it';