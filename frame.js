function submitText(){
  if (event.which===13 || event.which===1){//accepts enter key or click on the submit button
    if (document.getElementById("myText").value!==""){//checks to make sure text isn't blank
      message = `[${window.name}] - ${document.getElementById("myText").value} <br>`// formats text message as [name] - text
      document.getElementById("myText").value = ""// resets text field as blank
      parent.postMessage(message, "*")// send message to parent screen
    }
  }
}

window.addEventListener('message', receiveMessage)// adds event listener for recieved message from postmaster

function receiveMessage(){
  var element = document.getElementById("convoField")
  element.innerHTML = element.innerHTML + event.data //adds new text to field
  element.scrollTop = element.scrollTop + element.scrollHeight //scrolls down in convoField
}
