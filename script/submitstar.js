var variableIDs = [
  'age', 
  'ableToVc', 
  'timezone', 
  'minecraftUsername', 
  'discordUsername', 
  'buildingExperience', 
  'buildingStyle',
  'buildingPictures',
  'tellUsAboutYourself'];

var variableNames = [
  'How old are you?', 
  'Are you comfortable with and able to voice chat? (this is not necessary, but encouraged)',
  'Timezone',
  'Minecraft username',
  'Discord username and tag',
  'What experience do you have with building?',
  'Talk about your building style a bit.',
  'Attach some pictures of your past builds.',
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

function sendStarMessage() {
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
  var message = "```STAR APPLICATION - " + dateFormatted + " UK TIME```"

  for (var i = 0; i < variableIDs.length; i++) {
    message += "**" + variableNames[i] + "**" + "\n";
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
  }

  const params = {
    username: "Idra\'s Minion",
    avatar_url: "",
    content:  message
  }

  request.send(JSON.stringify(params));
  window.open("application-star-submitted.html");
}