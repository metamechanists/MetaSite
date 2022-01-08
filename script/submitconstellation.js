var variableIDs = [
  'age', 
  'ableToVc', 
  'timezone', 
  'minecraftUsername', 
  'discordUsername', 
  'shouldBeStaff', 
  'shouldNotBeStaff', 
  'moderationExperience', 
  'changeWhatHow', 
  'tellUsAboutYourself'];

var variableNames = [
  'How old are you?', 
  'Are you comfortable with and able to voice chat? (this is not necessary, but encouraged)',
  'Timezone',
  'Minecraft username',
  'Discord username and tag',
  'Why should you be a staff member?',
  'Why should you not be a staff member?',
  'What prior experience do you have with moderation?',
  'If you could change one thing about the server, what would it be and how would you do it?',
  'Tell us about yourself. Introvert or extrovert? What\'s your opinion on the meaning of life? What\'s your favourite tea brand?']


function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function sendConstellationMessage() {
  const webhook = loadFile("webhook.txt");
  var applicationComplete = true;
  var theme = document.getElementsByTagName('link')[1]; 

  for (var i = 0; i < variableIDs.length; i++) {
    element = document.getElementsByName(variableIDs[i])[0];
    if (element.value == "") {
      
      if (theme.getAttribute('href') == 'style/dark.css') {
        element.style.backgroundColor = "#602A27";
      } else {
        element.style.backgroundColor = "#ffd7d7";
      }
      applicationComplete = false;

    } else {
      
      if (theme.getAttribute('href') == 'style/dark.css') {
        element.style.backgroundColor = "#161616";
      } else {
        element.style.backgroundColor = "#e7e7e7";
      }
    }
  }

  const errorContainer = document.getElementById("errorContainer");
  const successContainer = document.getElementById("successContainer");

  if (!applicationComplete) {
    if (errorContainer.children.length == 0) {
      const errorParagraph = document.createElement("p");
      const errorText = document.createTextNode("You didn't answer all the questions.");
      errorParagraph.appendChild(errorText);
      errorContainer.appendChild(errorParagraph);
    }
    return;
  }

  errorContainer.remove();

  const successParagraph = document.createElement("p");
  const successText = document.createTextNode("Application submitted!");
  successParagraph.appendChild(successText);
  successContainer.appendChild(successParagraph);

  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');

  var date = new Date();
  var dateFormatted = date.toLocaleString();
  var message = "```CONSTELLATION APPLICATION - " + dateFormatted + " UK TIME```"

  for (var i = 0; i < variableIDs.length; i++) {
    message += "**" + variableNames[i] + "**" + "\n";
    message += document.getElementsByName(variableIDs[i])[0].value + "\n\n";
  }

  const params = {
    username: "Idra\'s Minion",
    avatar_url: "",
    content:  message
  }

  request.send(JSON.stringify(params));
  window.open("application-constellation-submitted.html");
}