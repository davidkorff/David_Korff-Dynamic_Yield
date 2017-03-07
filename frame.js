function submitText(){
  if (document.getElementById("myText").value!==""){
    // document.getElementById("convoField").innerHTML = document.getElementById("convoField").innerHTML +
    // window.name + ": " + document.getElementById("myText").value+"<br>"
    message = `[${window.name}] - ${document.getElementById("myText").value} <br>`
    document.getElementById("myText").value = ""
    // debugger
    parent.postMessage(message, "*")
  }
}

window.addEventListener('message', receiveMessage)

function receiveMessage(){
  document.getElementById("convoField").innerHTML = document.getElementById("convoField").innerHTML + event.data

  // debugger


}
