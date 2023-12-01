const express = require('express');
const app = express();
const Blog = require('./models/blog');
const blogJson = require('./public/blog.json');

app.use(express.json());
app.use(express.static('public'));


const user = {
    username: 'test',
    password: 'test'
};

let auth = false;

const isAuthorized = (req, res, next) => {
    if(auth) {
        next()
    } else {
        res.sendFile(__dirname + "/public" + '/login.html');
    } 
}

app.get('/login', (req, res) => {
    const {uname, pass} = req.body;
    if (uname == user.username && pass == user.password) {
        auth = true;
        console.log('Login successful');
        console.log('auth: ', auth);
        res.sendFile(__dirname + '/public/index.html');
    } else {
        res.sendFile(__dirname + "/public" + '/login.html');
    }
});

app.post('/login', (req, res) => {
    const {uname, pass} = req.body;

    if (uname === user.username && pass === user.password) {
        auth = true;
        console.log('Login successful');
        console.log('auth: ', auth);
        res.sendFile(__dirname + '/public/index.html');
    } else {
        res.sendFile(__dirname + "/public" + '/login.html');
    }
});

app.use(isAuthorized);  

app.get('/', isAuthorized, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/5729520', (req, res) => {
    res.sendFile(__dirname + '/public/5729520.html');
})

app.get('/api/blogs', (req, res) => {
    res.json(blogJson);
});


app.listen(3001, () => {
    console.log('Listening on port 3001');
});
