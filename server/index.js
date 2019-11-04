const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');

let data = JSON.parse(fs.readFileSync('./data.json'))

app.get('/register', (req, res) => {
    let newbie = req.query.login + '_' + req.query.pass;
    if (data[newbie] != null) res.send('err');
    data[newbie] = {};
    console.log(data);
    fs.writeFile('./data.json', JSON.stringify(data), err => console.log(err));
    res.send('done');
});

app.get('/add', (req, res) => {
    let login = req.query.login;
    let pass = req.query.pass;
    let url = req.query.url;
    let urlPass  = req.query.urlPass;
    data[login + '_' + pass][url] = urlPass;
    fs.writeFile('./data.json', JSON.stringify(data), err => console.log(err));
    res.send('done');
});

app.get('/', (req, res) => {
    let login = req.query.login;
    let pass = req.query.pass;
    res.send(data[login + '_' + pass]);
});


http.listen(3000, () => {
    console.log("HTTP server starred on post 3000");
});
