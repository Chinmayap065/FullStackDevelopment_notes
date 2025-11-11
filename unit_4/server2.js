const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    const parsedUrl=url.parse(req.url,true);
    const path=parsedUrl.pathname;
    const name=parsedUrl.query.name;
    if(path === '/'){
        const message=name
        ?`Welcome to nodejs,${name}!`
        :`Welcome to nodejs`;
        res.writeHead(200,{'content-type':'text/plain'})
        res.end(message);

    }
})
server.listen(8000,()=>{
    console.log('Server is running at http://localhost:8000')
})