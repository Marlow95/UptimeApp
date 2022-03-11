/*

Primary API file

*/

//Dependencies

const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    res.end('Hello');
    console.log(`Request received on path: ${trimmedPath}`);
});

const port = 3500;
server.listen(port, () => { console.log(`Listening on port ${ port }`) });