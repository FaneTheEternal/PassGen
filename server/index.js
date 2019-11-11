const app = require('express')();
const fs = require('fs');
const http = require('http');
const https = require('https');
const tls = require('tls');
const privateKey  = fs.readFileSync('./sslCERT/rootCA-key.pem', 'utf8').toString();
const certificate = fs.readFileSync('./sslCERT/rootCA.pem', 'utf8').toString();

const credentials = tls.createSecureContext({key: privateKey, cert: certificate});

let data = JSON.parse(fs.readFileSync('./data.json'))


app.get('/add', (req, res) => {
    console.log(`${req.method}: ${req.rawHeaders[1]}`);
    console.log(req.query);
    let user = req.rawHeaders[1].slice(0, req.rawHeaders[1].length - 5);
    let domain = req.query.domain;
    let login = req.query.login;
    let pass = req.query.password;
    if (data[user] == undefined) data[user] = {};
    if (data[user][domain] == undefined) data[user][domain] = {};
    data[user][domain][login] = password;
    fs.writeFile('./data.json', JSON.stringify(data), err => console.log(`Errors: ${err}`));
    res.send('done');
});

app.get('/', (req, res) => {
    console.log(`${req.method}: ${req.rawHeaders[1]}`);
    console.log(req.query);
    let user = req.rawHeaders[1].slice(0, req.rawHeaders[1].length - 5);
    res.send(`${data[user]}`);
});


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
