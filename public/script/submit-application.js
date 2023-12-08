const button_error_color = "#A04040"
const button_submitting_color = "606020"
const button_success_color = "#404040"

const input_error_color = "#402020"
const input_default_color = "#161616"

const errorContainer = document.getElementById("errorContainer")
const progressContainer = document.getElementById("progressContainer")
const successContainer = document.getElementById("successContainer")
const interviewContainer = document.getElementById("interviewContainer")
const progressParagraph = document.createElement("p")
const submitButton = document.getElementById("submit-button")

const error_message = "Some questions weren't answered - they've been highlighted in red."
const submitting_message = "Application is being submitted. <b>Do not leave this page.</b>"
const failed_message = "<b>FAILED TO SUBMIT THE APPLICATION (Idra wtf did you do). Please contact Idra on Discord and make sure to save your application answers.</b>"
const submitted_message = "Application submitted!"

// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}

function addParagraph(divName, text) {
  const container = document.getElementById(divName)
  const paragraph = document.createElement("p")
  paragraph.innerHTML = text
  container.appendChild(paragraph)
}

function indicateApplicationIncomplete() {
  if (errorContainer.children.length == 0) {
    addParagraph("errorContainer", error_message)
  }
  submitButton.style.backgroundColor = button_error_color
}

function indicateSubmissionInProgress() {
  addParagraph("progressContainer", submitting_message)
  submitButton.style.backgroundColor = button_submitting_color
  submitButton.style.cursor = "not-allowed"
  submitButton.disabled = true
}

function indicateSubmissionDone() {
  progressContainer.remove();
  submitButton.style.backgroundColor = button_success_color
  addParagraph("successContainer", submitted_message)
}

function indicateSubmissionFailed() {
  progressContainer.remove();
  addParagraph("successContainer", failed_message)
}

function postApplication(messages) {
  if (messages.length > 0) {
    let request = new XMLHttpRequest()
    request.open("POST", "/api/submit-application")
    request.setRequestHeader('Content-type', 'application/json')
    request.onload = function() {
        if (request.status == 200) {
          indicateSubmissionDone()
          showInterviewInformation()
        } else {
          indicateSubmissionFailed()
        }
    }
    request.send(JSON.stringify({ "messages": messages }))
  }
}

function showInterviewInformation() {
  addParagraph("interviewContainer", "You should hear back from us within 7 days. If your application is accepted, you\'ll go through one or two interviews so we can make sure you\'re the right match. This will be conducted in a voice channel (although you can either type or talk depending on your preference). Thanks for applying and we\'ll be in touch soon.");
}

function checkApplicationComplete() {
  let applicationComplete = true

  for (id in checkboxIDs) {
    element = document.getElementById(id);
    if (!element.checked) {
      element.style.backgroundColor = input_error_color
      applicationComplete = false;
    } else {
      element.style.backgroundColor = input_default_color
    }
  }

  for (id in variableIDs) {
    element = document.getElementById(id);
    if (element.value == "") {
      element.style.backgroundColor = input_error_color
      applicationComplete = false
    } else {
      element.style.backgroundColor = input_default_color
    }
  }
  
  return applicationComplete
}

function getMessage(i) {
  let element = document.getElementById(variableIDs[i])
  return "**" + variableNames[i] + "**" + "\n" + element.value + "\n\n"
}

function getMessages() {
  var date = new Date()
  var dateFormatted = date.toLocaleString()
  var messages = ["```" + applicationType + "APPLICATION - " + dateFormatted + "```"]
  for (var i = 0; i < variableIDs.length; i++) {
    let message = getMessage(i)
    messages.push(message)
  }
  return messages
}

function submitApplication() {
  if (!checkApplicationComplete()) {
    indicateApplicationIncomplete();
    return;
  }
  errorContainer.remove()
  indicateSubmissionInProgress()
  postApplication(getMessages())
}