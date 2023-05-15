let express = require('express');
let app = express();

require('dotenv').config()

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    var message = 'Hello json';
    
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        message = message.toUpperCase();
    }
    
    const data = { message };
    res.json(data);

    });

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send({time: req.time});
});

app.use('/public', express.static(__dirname + "/public"));

module.exports = app;
