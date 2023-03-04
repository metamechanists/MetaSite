// You're looking at my terrible javascript?
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
  'Are you comfortable with talking in voice chat?',
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



const webhook = loadFile("webhook.txt");
const username = "Idra\'s Minion";
const avatar_url = "";

const errorContainer = document.getElementById("errorContainer");
const progressContainer = document.getElementById("progressContainer");
const successContainer = document.getElementById("successContainer");
const interviewContainer = document.getElementById("interviewContainer");
const progressParagraph = document.createElement("p");
const submitButton = document.getElementsByName("submit-button")[0]


function addParagraph(divName, text) {
  const container = document.getElementById(divName);
  const paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  container.appendChild(paragraph);
}

function indicateApplicationIncomplete() {
  if (errorContainer.children.length == 0) {
    addParagraph("errorContainer", "You didn't answer all the questions. Make sure you answer all of them, then try again!");
  }

  document.getElementsByName("submit-button")[0].style.backgroundColor = "#905050";
}

function indicateApplicationInProgress() {
  addParagraph("progressContainer", "Please wait, submitting application...");

  submitButton.style.backgroundColor = "#909050";
  submitButton.style.cursor = "not-allowed";
  submitButton.disabled = true;
}

function indicateApplicationSubmitted() {
  progressContainer.remove();
  submitButton.style.backgroundColor = "#505050";

  addParagraph("successContainer", "Application submitted!");
}

function showInterviewInformation() {
  addParagraph("interviewContainer", "Thanks for taking the time to apply, we appreciate it. You should hear back from us within \
  72 hours. If you haven\'t heard from us by then, feel free to spam Idra#9838 on Discord.\n\n \
  \
  If your application is accepted, you\'ll go through one or two interviews with the staff team and the builders so we can make sure \
  you\'re the right match. This will be conducted in a voice channel (although you can either type or talk depending on your preference). \
  If you\'re accepted, we\'ll be in touch to find a time that works for both you and us.\n\n \
  \
  Thanks again for applying!");
}



function checkApplicationComplete() {
  let applicationComplete = true;

  for (var i = 0; i < variableIDs.length; i++) {
    element = document.getElementsByName(variableIDs[i])[0];
    
    if (element.value == "") {
      element.style.backgroundColor = "#602A27";
      applicationComplete = false;

    } else {
      element.style.backgroundColor = "#161616";
    }
  }

  return applicationComplete;
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
            sleep(300); // let's not get rate-limited
            // this wouldn't be necessary if the connection between the discord server and void's machine wasn't so fast
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