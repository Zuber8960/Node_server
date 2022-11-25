
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('zuber');
    res.write('<H1>Zuber Ahmad</H1>');
    res.end();
});

server.listen(4000);
