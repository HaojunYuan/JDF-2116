const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/', (req, res) => {
    res.redirect('/audio');
});

app.get('/createaccount', (req, res) => {
    res.sendFile(__dirname + '/createaccount.html');
});

app.post('/createaccount', (req, res) => {
    res.redirect('/audio');
});

app.get('/audio', (req, res) => {
    res.sendFile(__dirname + '/audio.html');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

//Run app, then load http://localhost:port in a browser to see the output.