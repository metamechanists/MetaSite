const url = 'https://api.mcsrvstat.us/2/play.metamechanists.org';


function FormatStatus(response) {
    var element = document.getElementById("status");
    if (response.online) {
        element.innerHTML = "online"
        element.classList.add("data-row-value-good")
    } else {
        element.innerHTML = "offline"
        element.classList.add("data-row-value-bad")
    }
}

function FormatOnline(response) {
    var element = document.getElementById("online");
    element.innerHTML = response.players.online
}

function FormatMOTD(response) {
    var element = document.getElementById("motd");
    element.innerHTML = response.motd.html[0] + "<br>" + response.motd.html[1]
}

function FormatPlayers(response) {
    var element = document.getElementById("players");
    console.log(response.players.list);
    for (var key in response.players.list[0]) {
        console.log(key);
    }
}

function FormatResponse(response) {
    FormatStatus(response)
    if (response.online) {
        FormatOnline(response)
        FormatMOTD(response)
        FormatPlayers(response)
    }
}

function GetData() {

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => FormatResponse(response))
}

GetData()