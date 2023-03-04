// pls no ddos
const webhook = "https://discord.com/api/webhooks/919722214474022992/GVdY5MnqYFQorgwS0lV1z35bt-4XorOFtZqMd4YB8D51OqSFGJHzjLbErv0GDfQbyjHj"

const username = "Idra\'s Minion";
const avatar_url = "";

const button_error_color = "#A04040";
const button_submitting_color = "606020";
const button_success_color = "#404040";

const input_error_color = "#402020";
const input_default_color = "#161616";

const errorContainer = document.getElementById("errorContainer");
const progressContainer = document.getElementById("progressContainer");
const successContainer = document.getElementById("successContainer");
const interviewContainer = document.getElementById("interviewContainer");
const progressParagraph = document.createElement("p");
const submitButton = document.getElementById("submit-button");

const error_message = "Some questions weren't answered - they've been highlighted in red.";
const submitting_message = "Application is being submitted. <b>Do not leave this page.</b>"
const submitted_message = "Application submitted!"

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function addParagraph(divName, text) {
  const container = document.getElementById(divName);
  const paragraph = document.createElement("p");

  paragraph.innerHTML = text;
  container.appendChild(paragraph);
}



function indicateApplicationIncomplete() {
  if (errorContainer.children.length == 0) {
    addParagraph("errorContainer", error_message);
  }

  document.getElementById("submit-button").style.backgroundColor = button_error_color;
}

function indicateApplicationInProgress() {
  addParagraph("progressContainer", submitting_message);

  submitButton.style.backgroundColor = button_submitting_color;
  submitButton.style.cursor = "not-allowed";
  submitButton.disabled = true;
}

function indicateApplicationSubmitted() {
  progressContainer.remove();
  submitButton.style.backgroundColor = button_success_color;

  addParagraph("successContainer", submitted_message);
}



function showInterviewInformation() {
  addParagraph("interviewContainer", "You should hear back from us within 7 days. If your application is accepted, you\'ll go through one or two interviews so we can make sure you\'re the right match. This will be conducted in a voice channel (although you can either type or talk depending on your preference). Thanks for applying and we\'ll be in touch soon.");
}



function checkApplicationComplete() {
  let applicationComplete = true;

  for (var i = 0; i < variableIDs.length; i++) {
    element = document.getElementById(variableIDs[i]);
    
    if (element.value == "") {
      element.style.backgroundColor = input_error_color;
      applicationComplete = false;

    } else {
      element.style.backgroundColor = input_default_color;
    }
  }

  return applicationComplete;
}

function getMessage(i) {
  var message = "**" + variableNames[i] + "**" + "\n";
  let element = document.getElementById(variableIDs[i]);

  message += element.value + "\n\n";

  return message;
}

function getMessages() {
  var date = new Date();
  var dateFormatted = date.toLocaleString();
  var messages = ["```" + applicationType + "APPLICATION - " + dateFormatted + "```"];

  for (var i = 0; i < variableIDs.length; i++) {
    let message = getMessage(i);
    messages.push(message);
  }

  return messages;
}



function formWebhookRequest() {
  let request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  return request;
}

function sendWebhookMessages(messages) {
  
  if (messages.length > 0) {
    let request = formWebhookRequest();

    request.onreadystatechange = function() {
        if ((request.readyState == XMLHttpRequest.DONE)) {
          messages.shift();
            sleep(300); // let's not get rate-limited
            sendWebhookMessages(messages);
        }
    }

    const params = {
      username: username,
      avatar_url: avatar_url,
      content: messages[0] + "_ _"
    }

    request.send(JSON.stringify(params));

  } else {
    indicateApplicationSubmitted();
    showInterviewInformation();
  }
}



function submitApplication() {
  var applicationComplete = checkApplicationComplete();

  if (!applicationComplete) {
    indicateApplicationIncomplete();
    return;
  }
  
  errorContainer.remove();

  indicateApplicationInProgress();

  let messages = getMessages();

  sendWebhookMessages(messages);
}