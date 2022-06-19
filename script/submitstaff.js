// You're looking at my terrible javascript?
// Most of this was written at 3am, and it's basically my first time doing JS
// please don't judge lmao


const variableIDs = [
  'age', 
  'ableToVc', 
  'timezone', 
  'minecraftUsername', 
  'discordUsername', 
  'moderationExperience', 
  'administrationExperience',
  'scenario1',
  'scenario2',
  'scenario3',
  'scenario4',
  'scenario5',
  'scenario6',
  'tellUsAboutYourself'];

const variableNames = [
  'How old are you? You can give a range (eg: 14-16)', 
  'Are you comfortable with talking in voice chat? This is not necessary, so don\'t feel pressured :)',
  'Timezone',
  'Minecraft username',
  'Discord username and tag',
  'What experience do you have with moderation? This doesn\'t have to be in Minecraft. What challenges did you face and how did you solve them? What did your role in moderation involve?',
  'Talk about your building style a bit. Large or small scale? What are your strengths and weaknesses? What would you like to learn, and what doesn\'t appeal to you so much?',
  'Do you have any experience with Minecraft development or administration? Do you enjoy development/administration? What aspects are you good at, and what aspects could you improve upon?',
  'Player A has built a large obsidian tower just outside Player B\'s (claimed) base. Player B is initially annoyed about the tower, but eventually decides that he likes it. As a staff member, would you give any consequences to player A, and if so, what consequences would you give them?',
  'Player A, after erecting his tower, goes mining. You\'re watching him in vanish and suspect he might be X-raying. How might you recognise an X-rayer, and if you conclude him to be X-raying, what consequence would you give him?',
  'After this ordeal, Player B is visited by Player C, who set a home at Player B\'s base. Player B doesn\'t like this, and rudely asks player C to delete it. Player C, enraged, starts swearing at PLayer B in public chat. Player B responds in kind, and the two continue hurling insults at each other for several minutes. You arrive onto the scene right as the argument is at its most heated. Unfortunately, no other staff members are online at the time. How do you go about defusing the situation, determining what exactly happened, and handing out appropriate consequences?',
  'A build team member and a staff team member have a disagreement with each other and end up having an argument in voice chat before one of them leaves in a huff and blocks/ignores the other team member. As another staff member, how could you help to repair the relationship between them? What should both of them do to repair the relationship with each other?',
  'You\'re a staff member helping to run a PvP tournament event with two other staff members. There are almost twice as many people as expected, and there are multiple issues with the arena causing unfair gameplay and allowing spectators to fight each other while not in the arena. Several people are complaining about the event, and chat is starting to get heated.The two other team members are struggling to manage the event. You\'re an administrator with access to all commands. You know how to fix the arena, but you don\'t know how long it\'ll take. You can also help with matchmaking or calming chat down. How do you decide what to do in this situation? What would be the most effective strategies, and why?',
  'Alright, last scenario. Advertising is difficult. One idea we\'ve come up with recently is referral rewards: if Player A invites Player B, Player A gets a reward. How could you go about implementing a system like this? How would you verify that Player B was actually invited by player A, automatically? What rewards should Player A get? Should Player B get any rewards? What are some issues that might come with this system, and how could you mitigate them?',
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
  If your application is accepted, you\'ll go through one or two interviews with the staff team so we can make sure \
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
  var messages = ["```STAFF APPLICATION - " + dateFormatted + "```"];

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



function sendStaffMessage() {
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