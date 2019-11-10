const app = require('express')();
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('./sslCERT/example.key', 'utf8');
const certificate = fs.readFileSync('./sslCERT/example.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

let data = JSON.parse(fs.readFileSync('./data.json'))


app.get('/add', (req, res) => {
    console.log(`${req.method}: ${req.rawHeaders[1]}`);
    console.log(req.query);
    let user = req.rawHeaders[1].slice(0, req.rawHeaders[1].length - 5);
    let domain = req.query.domain;
    let login = req.query.login;
    let pass = req.query.password;
    if (data[user] == undefined) data[user] = {};
    data[user][domain] = {
            "login": login,
            "password": pass
    };
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
const httpsServer = https.createServer(app);

httpServer.listen(8080);
httpsServer.listen(8443);
