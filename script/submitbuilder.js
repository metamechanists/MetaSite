
// You're looking at my terible javascript?
// Most of this was written at 3am, and it's basically my first time doing JS
// please don't judge lmao


const variableIDs = [
  'age', 
  'ableToVc', 
  'timezone', 
  'minecraftUsername', 
  'discordUsername', 
  'buildingExperience', 
  'buildingStyle',
  'buildingPictures',
  'tellUsAStory',
  'tellUsAboutYourself'];

const variableNames = [
  'How old are you? You can give a range (eg: 14-16)', 
  'Are you comfortable with talking in voice chat? This is not necessary, so don\'t feel pressured :)',
  'Timezone',
  'Minecraft username',
  'Discord username and tag',
  'What experience do you have with building? This can include experience on past build teams, building competitions, your own projects, or anything else you can think of. What challenges did you face when building these projects and how did you solve them?',
  'Talk about your building style a bit. Large or small scale? What are your strengths and weaknesses? What would you like to learn, and what doesn\'t appeal to you so much?',
  'Attach some pictures of your past builds. You can upload them to any image hosting website. We recommend imgbb.com or imgur.com/upload',
  'Tell us a story (yes, this is open-ended, write about whatever you want)',
  'Tell us about yourself. Introvert or extrovert? What\'s your opinion on the meaning of life? What\'s your favourite tea brand?']



// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    result = xmlhttp.responseText;
  }
  return result;
}



//const webhook = loadFile("webhook.txt");
const webhook = "https://discord.com/api/webhooks/960914711753424896/yyoYLZV0XiPtD2_TOIZx8zpYwTkMRpwYBzC1Hf3V44OA6Q2BBiOu0uORoYdtM4JG_Ur4"
const username = "Idra\'s Minion"
const avatar_url = ""

const errorContainer = document.getElementById("errorContainer");
const progressContainer = document.getElementById("progressContainer");
const successContainer = document.getElementById("successContainer");
const interviewContainer = document.getElementById("successContainer");
const progressParagraph = document.createElement("p");
const submitButton = document.getElementsByName("submit-button")[0]



function indicateApplicationIncomplete() {
  if (errorContainer.children.length == 0) {
    const errorParagraph = document.createElement("p");
    const errorText = document.createTextNode("You didn't answer all the questions. Make sure you answer all of them, then try again!");
    errorParagraph.appendChild(errorText);
    errorContainer.appendChild(errorParagraph);
  }
  document.getElementsByName("submit-button")[0].style.backgroundColor = "#602A27";
}

function indicateApplicationInProgress() {
  const progressText = document.createTextNode("Please wait, submitting application...");
  progressParagraph.appendChild(progressText);
  progressContainer.appendChild(progressParagraph);

  submitButton.style.backgroundColor = "#905050"
  submitButton.style.cursor = "not-allowed"
  submitButton.disabled = true
}

function indicateApplicationSubmitted() {
  progressContainer.remove();
  const successParagraph = document.createElement("p");
  const successText = document.createTextNode("Application submitted!");
  successParagraph.appendChild(successText);
  successContainer.appendChild(successParagraph);
}

function showInterviewInformation() {
  const successParagraph = document.createElement("p");
  const successText = document.createTextNode("Thanks for taking the time to apply, we appreciate it. You should hear back from us within \
  72 hours. If you haven\'t heard from us by then, feel free to spam Idra#9838 on Discord. <br><br> \
  \
  If your application is accepted, you\'ll go through one or two interviews with the staff team and the builders so we can make sure \
  you\'re the right match. This will be conducted in a voice channel (although you can either type or talk depending on your preference). \
  If you\'re accepted, we\'ll be in touch to find a time that works for both you and us. <br><br> \
  Thanks again for applying!");
  successParagraph.appendChild(successText);
  successContainer.appendChild(successParagraph);
}



function checkApplicationComplete() {
  for (var i = 0; i < variableIDs.length; i++) {
    element = document.getElementsByName(variableIDs[i])[0];
    
    if (element.value == "") {
      element.style.backgroundColor = "#602A27";
      return false;

    } else {
      element.style.backgroundColor = "#161616";
    }
  }

  return true;
}

function formMessage(i) {
  var message = "**" + variableNames[i] + "**" + "\n";
  let elements = document.getElementsByName(variableIDs[i]);

  if (elements.length == 1) {
    message += elements[0].value + "\n\n";

  } else {
    for (var e = 0; e < elements.length; e++) {
      if (elements[e].checked) {
        message += elements[e].value + "\n\n";
      }
    }
  }

  return message;
}

function formMessages() {
  var date = new Date();
  var dateFormatted = date.toLocaleString();
  var messages = ["```BUILDER APPLICATION - " + dateFormatted + "```"];

  for (var i = 0; i < variableIDs.length; i++) {
    let message = formMessage(i);
    messages.push(message);
  }

  return messages;
}



function formWebhookRequest(message) {
  let request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  return request;
}

function sendWebhookMessages(messages) {
  
  if (messages.length > 0) {
    let request = formWebhookRequest(messages[0]);

    request.onreadystatechange = function() {
        if ((request.readyState == XMLHttpRequest.DONE)) {
          messages.shift();
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
  }
}



function sendBuilderMessage() {
  var applicationComplete = checkApplicationComplete();

  if (!applicationComplete) {
    indicateApplicationIncomplete();
    return;
  }
  
  errorContainer.remove();

  indicateApplicationInProgress();

  let messages = formMessages();

  sendWebhookMessages(messages);
}