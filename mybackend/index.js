import http from 'http';
const server = http.createServer((req,res) =>{
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("This is from the backend");
});
server.listen(7007,()=>{
    console.log('server running at port ${7007}');
});