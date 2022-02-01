const http = require('http');
const fs = require('fs');
const url = require('url');
const app = http.createServer(function(request, response){
    const _url = request.url;
    const queryData = url.parse(_url, true).query;
    const pathname = url.parse(_url, true).pathname;
    let title = queryData.id;
    console.log(pathname);
    if(pathname === '/') {
        fs.readFile(`data/${title}`, 'utf8', (err, description) => {
            const template = `<!doctype html>
                            <html>
                            <head>
                            <title>WEB2 - ${title}</title>
                            <meta charset="utf-8">
                            </head>
                            <body>
                            <h1><a href="/">WEB</a></h1>
                            <ol>
                                <li><a href="/?id=html">HTML</a></li>
                                <li><a href="/?id=css">CSS</a></li>
                                <li><a href="/?id=javascript">JavaScript</a></li>
                            </ol>
                            <h2>${title}</h2>
                            <p>${description}</p>
                            </body>
                            </html>
                            `;
            response.writeHead(200);
            response.end(template);
        });
    }
    else {
        response.writeHead(404);
        response.end('Not Found.');
    }
});
app.listen(3000);