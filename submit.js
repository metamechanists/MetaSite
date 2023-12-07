const fetch = require("node-fetch");
const fs = require('fs');

const username = "Idra\'s Minion"
const avatar_url = ""
let webhook

fs.readFile('./webhook.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return;
    }
    webhook = data.toString()
});

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < milliseconds)
}

exports.sendWebhookMessage = async function sendWebhookMessage(message) {
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            avatar_url: avatar_url,
            content: message + "_ _"
        }),
    }
  
    const response = await fetch(webhook, request)
    sleep(100) // let's not get ratelimited
    return response.status == 200 || response.status == 204
}