const app = require('express')();
const fs = require('fs');
const privateKey  = fs.readFileSync('sslcert/rootCA-key.pem', 'utf8');
const certificate = fs.readFileSync('sslcert/rootCA.pem', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const https = require('https').Server(credentials, app);

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


https.listen(8443, () => {
    console.log(`HTTPS server starred on port 8443`);
});
