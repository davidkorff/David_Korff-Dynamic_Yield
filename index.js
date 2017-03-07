window.onload=prepareFrame()
function prepareFrame() {
        name = prompt("Please enter your name", "")
        if (name!=="" && name!=="null"){
          var iframe = document.createElement("iframe")
          iframe.setAttribute("src", "frame.html")
          iframe.setAttribute("name", `${name}`)
          iframe.setAttribute("id", `${name}`)
          iframe.style.width = "500px"
          iframe.style.height = "500px"
          document.body.appendChild(iframe)
          addHandle(document.getElementById(`${name}`), window)

          sendJoinMessage(`${name}`)
      }
    }
window.addEventListener('message', receiveMessage)

function receiveMessage(){
  var array = document.getElementsByTagName("iframe")
  for (let i = 0; i<array.length; i++){
    var receiver = array[i].contentWindow
    receiver.postMessage(event.data, '*');
  }
}

function sendJoinMessage(name){
  var array = document.getElementsByTagName("iframe")
  for (let i = 0; i<array.length; i++){
    var receiver = array[i].contentWindow
    receiver.postMessage(`[system] - ${name} joined the conversation<br>`, '*')
  }
}
