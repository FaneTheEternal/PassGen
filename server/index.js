const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json'))

app.get('/add', (req, res) => {
    let user = req.rawHeaders[1].slice(0, req.rawHeaders[1].length - 5);
    let domain = req.query.domain;
    let login = req.query.login;
    let pass = req.query.password;
    data[user] = {};
    data[user][domain] = {
            "login": login,
            "password": pass
    };
    fs.writeFile('./data.json', JSON.stringify(data), err => console.log(err));
    res.send('done');
});

app.get('/', (req, res) => {
    let user = req.rawHeaders[1].slice(0, req.rawHeaders[1].length - 5);
    res.send(data[user]);
});


http.listen(3000, () => {
    console.log("HTTP server starred on post 3000");
});
