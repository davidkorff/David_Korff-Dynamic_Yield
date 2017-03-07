

function submitText(){
  if (document.getElementById("myText").value!==""){
    message = `[${window.name}] - ${document.getElementById("myText").value} <br>`
    document.getElementById("myText").value = ""
    parent.postMessage(message, "*")
  }
}

window.addEventListener('message', receiveMessage)
function receiveMessage(){
  document.getElementById("convoField").innerHTML = document.getElementById("convoField").innerHTML + event.data
}
