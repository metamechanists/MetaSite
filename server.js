const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const submit = require('./submit')

var app = express()

app.use(bodyParser.json());

app.post("/api/submit-application", async function (req, res) {
    let messages = req.body["messages"]
    res.statusCode = 200;
    for (i in messages) {
        const success = await submit.sendWebhookMessage(messages[i]);
        if (!success) {
            res.statusCode = 502;
        }
    }
    res.send()
    res.end()
});

app.use('/', express.static(
    path.join(__dirname, '/public'),
));

app.use('/', express.static(
    path.join(__dirname, '/public/html'),
    { extensions: ['html'] }
));

app.listen(8095);