let express = require('express');
let app = express();

require('dotenv').config()

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

app.use('/public', express.static(__dirname + "/public"));

module.exports = app;
